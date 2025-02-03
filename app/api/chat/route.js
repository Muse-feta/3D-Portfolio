// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// // export const dynamic = "force-dynamic";

// const openai = new OpenAI({
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: process.env.OPENROUTER_API_KEY, // Ensure this is set in .env.local
// //   timeout: 10000, // 10 seconds timeout
// });

// export async function POST(req) {
//   try {
//     const { messages } = await req.json();

//     if (!messages || !Array.isArray(messages)) {
//       return NextResponse.json(
//         { error: "Invalid request: messages array is required" },
//         { status: 400 }
//       );
//     }

//     const response = await openai.chat.completions.create({
//       model: "deepseek/deepseek-r1:free",
//       messages,
//     //   stream: true, // Enable streaming
//     });

//     if (!response || !response.choices || response.choices.length === 0) {
//       throw new Error("Invalid API response");
//     }

//     return NextResponse.json(response.choices[0].message);
//   } catch (error) {
//     console.error("Chat API error:", error);
//     return NextResponse.json(
//       { error: error.message || "Error fetching response" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request: messages array is required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://musefeta.vercel.app", // Replace with your actual site URL
          "X-Title": "MuseFeta", // Replace with your site name
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
          messages,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    if (!data || !data.choices || data.choices.length === 0) {
      throw new Error("Invalid API response");
    }

    return NextResponse.json(data.choices[0].message);
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: error.message || "Error fetching response" },
      { status: 500 }
    );
  }
}

