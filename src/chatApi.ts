import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";


export async function chatApi() {

  const chat = new ChatOpenAI({temperature: 0});

  const response = await chat.call([
    new HumanChatMessage("Hello there ! I hope you are well. do me a favor and say Hello world! from your side."
    ),
  ])

  console.log(response);

}
