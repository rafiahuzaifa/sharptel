import { NextRequest, NextResponse } from "next/server";

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-3.6-flash";

const SYSTEM_PROMPT = `You are the official website assistant for Sharptel (Sharp Communications Pvt. Ltd.), a leading ICT & telecom solutions provider based in Karachi, Pakistan.

ABOUT SHARPTEL:
Sharptel provides technology-related project implementation and integration across four main areas:
1. Connectivity Solutions - Enterprise Internet (dedicated fiber/microwave with CIR), Data Solutions (MPLS, Layer-2, dark fiber), Wireless Services (LTE/4G/5G, hotspots), Banking Enterprise connectivity, Call Center VoIP infrastructure, Satellite Service for remote areas.
2. Software Solutions - Mobile app development, custom web development, CRM/ERP customization, prototype development, graphic design, digital marketing.
3. Technology Solutions - Cyber security, Data Center & Colocation (Tier-3), Network Assessment, Wi-Fi/Hotspot solutions, IoT & Automation, Energy Conservation, Surveillance & Security, Virtual Private Servers, Voice over IP (VoIP/hosted PBX).
4. Managed Services - Managed IT Services, Managed Network Services, Managed Security Services, Cloud & Communications, IT & BPO Services.

KEY FACTS: 500+ clients served, 50+ technology partners (Cisco, Dell, Microsoft, HP, IBM, Oracle, VMware, Huawei, Sangfor, Sophos, Barracuda, D-Link), 15+ countries presence, 200+ engineers, presence in Karachi, Islamabad, Lahore, and AJK (Mirpur). ISO certified operations, 24/7 Network Operations Center, Pan-Pakistan coverage, 99.9% uptime SLA.

CONTACT:
- Customer Care: info@sharptel.pk | Support: servicedesk@sharptel.pk | Careers: careers@sharptel.pk
- Sales: +92-311-1123104 / +92-311-1123105 | 24/7 Support: +92-311-128-4373
- Head Office: Office 104 & 105, 1st Floor, Plot #54-C, Al-Murtaza Commercial Lane-2, DHA Phase VIII, Karachi, Pakistan
- Business hours: Monday - Saturday, 9AM - 6PM (support available 24/7)
- Contact/quote form: /Contact-us page, or the "Get Free Quote" button in the navbar

INSTRUCTIONS:
- Be concise, friendly, and professional. Answer in the same language/style the visitor uses (English or Roman Urdu).
- Help visitors understand Sharptel's services and guide them toward requesting a quote or contacting sales/support for specifics.
- Never invent exact pricing, contract terms, or SLAs beyond what's listed above — for pricing or custom requirements, direct them to request a quote via /Contact-us or call sales.
- If asked something unrelated to Sharptel or ICT/telecom services, politely redirect the conversation back to how you can help with Sharptel's offerings.
- Keep replies short (2-5 sentences) unless the visitor asks for detail.`;

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Chat is not configured yet. Please contact us directly at info@sharptel.pk." },
        { status: 503 }
      );
    }

    const { messages } = await req.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "No messages provided." }, { status: 400 });
    }

    const contents = messages
      .filter((m: { role: string; content: string }) => m.role === "user" || m.role === "assistant")
      .map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: String(m.content).slice(0, 4000) }],
      }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          generationConfig: { temperature: 0.4, maxOutputTokens: 500 },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", response.status, errText);
      return NextResponse.json(
        { error: "Sorry, the assistant is temporarily unavailable. Please try again shortly." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text || "").join("") ||
      "Sorry, I couldn't generate a response. Please contact info@sharptel.pk for assistance.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
