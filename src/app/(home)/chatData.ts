const chatData: ChatMessage[] = [
  {
    id: 1,
    role: "assistant",
    content: "Hello! How can I assist you today?",
  },
  {
    id: 2,
    role: "user",
    content:
      "Hi there! I'm looking for a good recipe for chocolate chip cookies.",
  },
  {
    id: 3,
    role: "assistant",
    content:
      "Great choice! Chocolate chip cookies are a classic favorite. Here's a simple recipe:\n\n1. Cream together 1 cup butter, 3/4 cup brown sugar, and 3/4 cup white sugar.\n2. Beat in 2 eggs and 2 tsp vanilla extract.\n3. In a separate bowl, mix 2 1/4 cups flour, 1 tsp baking soda, and 1/2 tsp salt.\n4. Combine wet and dry ingredients, then fold in 2 cups chocolate chips.\n5. Drop spoonfuls onto a baking sheet and bake at 375°F (190°C) for 9-11 minutes.\n\nWould you like any tips for making them extra delicious?",
  },
  {
    id: 4,
    role: "user",
    content:
      "That sounds great! Yes, I'd love some tips to make them even better.",
  },
  {
    id: 5,
    role: "assistant",
    content:
      "Excellent! Here are some tips to elevate your chocolate chip cookies:\n\n1. Use room temperature butter for a better texture.\n2. Chill the dough for at least 30 minutes before baking for thicker cookies.\n3. Use a mix of milk and dark chocolate chips for depth of flavor.\n4. Add a sprinkle of sea salt on top before baking for a gourmet touch.\n5. Slightly underbake for softer, chewier cookies.\n\nDo you have any other questions about baking cookies?",
  },
  {
    id: 6,
    role: "user",
    content:
      "These tips are fantastic! One last question: how long will the cookies stay fresh?",
  },
  {
    id: 7,
    role: "assistant",
    content:
      "I'm glad you find the tips helpful! Regarding freshness:\n\n- Stored in an airtight container at room temperature, the cookies will stay fresh for about 3-5 days.\n- For longer storage, you can keep them in the refrigerator for up to 2 weeks.\n- You can also freeze the baked cookies for up to 3 months. Just thaw them at room temperature when you're ready to enjoy them.\n\nTo maintain freshness, make sure they're completely cool before storing, and you can add a slice of bread to the container to help keep them soft. Enjoy your cookies!",
  },
  {
    id: 8,
    role: "user",
    content:
      "Thank you so much for all the information! I can't wait to try baking these cookies.",
  },
  {
    id: 9,
    role: "assistant",
    content:
      "You're very welcome! I'm excited for you to try baking these cookies. Remember, practice makes perfect, so don't be discouraged if your first batch isn't exactly as you imagined. Baking is both an art and a science, and part of the fun is in experimenting and finding what works best for you. Enjoy the process, and happy baking! If you have any more questions in the future, feel free to ask. Good luck!",
  },
];

export interface ChatMessage {
  id: number;
  role: "assistant" | "user";
  content: string;
}

export default chatData;
