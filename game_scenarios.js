// The Long Game: Complete Scenario Deck

const players = ["Daniel", "Claudia"];
let currentPlayerIndex = 0;
let current = 0;
let chaosScore = 0;
let selectedScenarios = [];
const usedScenarioIndexes = new Set();

// Level 1: Disaster & Danger
const level1Cards = [
  {
    text: "🌋 A volcano erupts nearby during your vacation. What do you do?",
    choices: [
      { text: "Try to outrun the lava.", result: "You both scream and survive. Barely. 🏃‍♂️🔥", chaos: 2 },
      { text: "Film a dramatic slow-mo goodbye.", result: "Oscar-worthy. Hot mess. 🎬🌋", chaos: 3 },
      { text: "Jump in the pool to stay cool.", result: "It works... somehow. 🏊‍♀️🔥", chaos: 0 },
      { text: "Build a raft and float to safety.", result: "Improvised. Effective. 🛶🌋", chaos: -1 },
      { text: "Use a volcano tour brochure as a shield.", result: "Predictably ineffective. 📄💥", chaos: 1 }
    ]
  },
  {
    text: "🧨 Someone accidentally activates the emergency alarm at a crowded museum.",
    choices: [
      { text: "Try to calm the crowd.", result: "Mixed success. You're shoved but praised. 🧘‍♀️🚨", chaos: 1 },
      { text: "Pretend you're a security guard.", result: "You get a whistle and responsibility. 🎖️😅", chaos: 0 },
      { text: "Blame it on the interactive exhibit.", result: "The kids back you up. Chaos is redirected. 🖼️🎮", chaos: 2 },
      { text: "Run and hope for the best.", result: "Trampled slightly. But free. 🏃‍♀️🚪", chaos: 3 },
      { text: "Start narrating it like a documentary.", result: "Everyone's confused. And calmer. 🎙️📽️", chaos: -1 }
    ]
  },
  {
    text: "🚗 Your car breaks down in the middle of nowhere at night.",
    choices: [
      { text: "Try to fix it using a YouTube video.", result: "It kind of works. Kind of. 🔧📱", chaos: 1 },
      { text: "Start a scary campfire story session.", result: "Too effective. Now you're both freaked out. 🔥👻", chaos: 2 },
      { text: "Wave down a passing car.", result: "It’s your old teacher. Small world. 🚘😳", chaos: 0 },
      { text: "Blame each other and walk home.", result: "Passive-aggressive cardio. 🥾😤", chaos: 2 },
      { text: "Turn on hazard lights and cuddle until dawn.", result: "Unexpectedly romantic. 🚨❤️", chaos: -1 }
    ]
  },
  {
    text: "🚁 You get trapped on a rooftop during a citywide blackout.",
    choices: [
      { text: "Use your phone light to signal SOS.", result: "Signal received. You’re heroes now. 📱🆘", chaos: -1 },
      { text: "Dance to keep warm.", result: "You both look ridiculous but stay warm. 💃🕺", chaos: 1 },
      { text: "Try to rappel down with bedsheets.", result: "Claudia vetoes it. You pout. 🪢😠", chaos: 2 },
      { text: "Order delivery to the rooftop.", result: "It arrives. You tip extra. 🍕🚁", chaos: 0 },
      { text: "Turn it into a dramatic rooftop podcast.", result: "You gain three followers. 🎙️🌆", chaos: 1 }
    ]
  },
  {
    text: "🌪️ A hurricane warning hits during your beach weekend.",
    choices: [
      { text: "Board up windows together heroically.", result: "You both feel powerful. Relationship leveled up. 💪💖", chaos: -2 },
      { text: "Try to grill indoors. Bad idea.", result: "Fire alarm says no. You both get roasted. 🔥🚨", chaos: 3 },
      { text: "Build a blanket fort and pretend you're pirates.", result: "Captain Claudia orders snacks. You obey. 🏴‍☠️🛋️", chaos: 0 },
      { text: "Attempt to surf the storm surge.", result: "Ill-advised. But very cinematic. 🏄🌊", chaos: 3 },
      { text: "Vlog your survival prep like influencers.", result: "You trend for all the wrong reasons. 📸😬", chaos: 2 }
    ]
  },
  {
    text: "🛍️ You and Claudia are trapped overnight in a department store. What do you do?",
    choices: [
      { text: "Fashion show with stolen mannequins.", result: "You both slay the runway. The security cameras have questions. 👗🎥", chaos: 1 },
      { text: "Camp in the bedding aisle.", result: "Luxury sleep achieved. You're basically glamping. 🛏️✨", chaos: -1 },
      { text: "Make a TikTok horror film.", result: "The jump scare was too real. Claudia screams for real. 😱📱", chaos: 2 },
      { text: "Raid the snack aisle, no regrets.", result: "Instant picnic. Bonding over chips. 🥨💕", chaos: -1 },
      { text: "Use walkie-talkies to pretend you're spies.", result: "You take it way too seriously. Claudia calls you 'Agent Cringe'. 🎧🕵️", chaos: 1 }
    ]
  }
];

// Level 2: Relationship Shenanigans
const level2Cards = [
  {
    text: "🎮 It's game night. Winner picks dinner.",
    choices: [
      { text: "Choose a chaotic board game.", result: "Rules unclear. Tensions rise. 🍕🎲", chaos: 2 },
      { text: "Agree to play co-op only.", result: "Teamwork makes the dream work. 🧠🤝", chaos: -1 },
      { text: "Someone flips the board.", result: "Board explodes. So do emotions. 💥", chaos: 3 },
      { text: "Mid-game snack break leads to bonding.", result: "You never finished. But you're full. 🍪", chaos: 0 },
      { text: "Argue over rules and call a truce.", result: "Neither wins. You go for tacos. 🌮", chaos: 1 }
    ]
  },
  {
    text: "📸 You find an old digital camera with forgotten couple photos.",
  choices: [
    { text: "Make a scrapbook out of them.", result: "You both cry. In a good way. 📘😭", chaos: -1 },
    { text: "Delete the blurry ones and argue over whose fault they were.", result: "History lost. Chaos found. 🗑️😬", chaos: 2 },
    { text: "Use them to make a cheesy slideshow with dramatic music.", result: "Oscar-worthy nostalgia. 🎞️🎻", chaos: 1 },
    { text: "Recreate the worst photos pose-for-pose.", result: "Laughter ensues. TikTok follows. 🔁📷", chaos: 0 },
    { text: "Find one that starts a fight you forgot you had.", result: "Time travel to tension town. 🕰️😤", chaos: 3 }
    ]
  },
  {
    text: "📦 A mysterious package arrives addressed to both of you.",
    choices: [
      { text: "Open it immediately. Curiosity wins.", result: "It’s a glitter bomb. Who sent this?! 🎇📦", chaos: 3 },
      { text: "Call the sender number on the box.", result: "It’s someone's mom. Meant to send socks. 📞🧦", chaos: 0 },
      { text: "Let Bella sniff it out.", result: "She barks, runs, and knocks it over. 🎁🐕💥", chaos: 2 },
      { text: "Wrap it again and re-gift it.", result: "Chaos deferred. But not forgotten. 🎁😈", chaos: 1 },
      { text: "Open it in the bathtub just in case.", result: "Safe choice. Someone is impressed. 🛁📦", chaos: -1 }
    ]
  },
  {
    text: "🍳 One of you insists on making breakfast-for-dinner for date night.",
    choices: [
      { text: "Make pancakes shaped like your dog.", result: "Too cute to eat. You try anyway. 🥞🐕", chaos: -1 },
      { text: "Burn the bacon but serve it anyway.", result: "Crispy chaos. Nobody dies. 🥓🔥", chaos: 2 },
      { text: "Bella jumps on the table mid-bite.", result: "She wins. Everyone's amused. 🐶🍳", chaos: 1 },
      { text: "Forget the eggs and order delivery.", result: "Breakfast dreams deferred. 🥚📱", chaos: 0 },
      { text: "Set the fire alarm off with toast.", result: "Classic move. 🔥🍞", chaos: 2 }
    ]
  },
  {
    text: "📷 You book a surprise couples photo shoot.",
    choices: [
      { text: "One wears a suit. The other wears sweatpants.", result: "Unmatched energy. Photographer cries. 📸💔", chaos: 2 },
      { text: "You both wear denim. Album cover achieved.", result: "Pure 90s power. 👖🎶", chaos: 1 },
      { text: "Dog refuses to sit still.", result: "30 blurry shots and one perfect gem. 🐶📷", chaos: 0 },
      { text: "Kiss their cheek. They sneeze.", result: "Love and allergies. 💋🤧", chaos: 1 },
      { text: "Photographer turns out to be an ex.", result: "You take over the shoot. Iconic. 📸😤", chaos: 3 }
    ]
  },
  {
    text: "🎢 You convince each other to try a roller coaster together.",
    choices: [
      { text: "Hold hands and scream the whole way.", result: "Emotional release. Core memory. 🎢🫶", chaos: 0 },
      { text: "Claudia pretends she's fine. She's not.", result: "She cries mid-loop. You owe her churros. 😭🌪️", chaos: 2 },
      { text: "You both chicken out at the last second.", result: "No regrets. Kind of. 🍦🎡", chaos: -1 },
      { text: "Get stuck at the top for 10 minutes.", result: "Forced deep talk. 💬😳", chaos: 1 },
      { text: "Take selfies the whole time.", result: "Everyone else is annoyed. You're iconic. 🤳🎢", chaos: 2 }
    ]
  },
  {
    text: "🎭 You both sign up for a couple’s improv class.",
    choices: [
      { text: "Yes-and your way into a fake marriage proposal.", result: "Everyone claps. Claudia is confused. 💍🎤", chaos: 3 },
      { text: "Break character mid-scene to flirt.", result: "The instructor is unimpressed. You're not. 😏🎭", chaos: 1 },
      { text: "Invent new couple nicknames on the spot.", result: "Cringe. Adorable. Solid. 🥴💕", chaos: 0 },
      { text: "Turn every scene into a rom-com.", result: "Someone lands a Netflix deal. Not you. 🎬💞", chaos: 2 },
      { text: "Refuse to go on stage.", result: "Respectful support. Quiet win. 🙃👏", chaos: -1 }
    ]
  }
];

// Level 3: Cringey but Cute
const level3Cards = [
  {
    text: "💬 You accidentally create a weird couple catchphrase. It starts spreading.",
    choices: [
      { text: "Lean in and get matching mugs with the phrase.", result: "No turning back now. ☕💘", chaos: 1 },
      { text: "Try to deny it in public.", result: "It slips out anyway. 🙈", chaos: 2 },
      { text: "Make it a competition to use it in serious settings.", result: "Parent-teacher conferences will never be the same. 📢😬", chaos: 3 },
      { text: "Pretend it was your idea all along.", result: "Classic move. Some eye rolls. 😎", chaos: 0 },
      { text: "Agree to retire it with a dramatic ceremony.", result: "Closure achieved. For now. 🕯️📜", chaos: -1 }
    ]
  },
  {
    text: "📦 One of you tries to subtly leave a second toothbrush at the other's place.",
    choices: [
      { text: "Say nothing and wait for a reaction.", result: "It’s noticed. Silence. Then a smirk. 🪥😏", chaos: 1 },
      { text: "Bring it up like it’s an accident.", result: "“Oh weird! Must’ve teleported!” 🧼🛸", chaos: 2 },
      { text: "Use it as an excuse to get matching bathroom cups.", result: "Domesticity unlocked. 🚰💖", chaos: -1 },
      { text: "Hide it somewhere more dramatic.", result: "It turns up... eventually. 🧴🎭", chaos: 2 },
      { text: "Leave a backup for them too.", result: "Equal parts thoughtful and intense. 💼🪥", chaos: 0 }
    ]
  },
  {
    text: "🎵 A random song becomes your unofficial 'couple anthem'—but it’s kind of awful.",
    choices: [
      { text: "Play it every time you get in the car.", result: "It’s muscle memory now. 🚗🎶", chaos: 1 },
      { text: "Pretend to hate it but sing every word.", result: "Claudia sees through you. 🎤🙃", chaos: 0 },
      { text: "Make it your couple karaoke song.", result: "Vibes? Immaculate. Vocals? Less so. 🎤💃", chaos: 2 },
      { text: "Create a dramatic music video at home.", result: "It wins an imaginary award. 🏆🎬", chaos: 3 },
      { text: "Try to replace it sneakily with a better one.", result: "Mutiny. Playlist war begins. 🎧⚔️", chaos: 2 }
    ]
  },
  {
    text: "🧸 One of you names an inanimate object in the house and gives it a backstory.",
    choices: [
      { text: "You both take it way too far.", result: "It has lore now. And a cousin. 📖👻", chaos: 3 },
      { text: "Use it to mediate minor arguments.", result: "Surprisingly effective. 🧸⚖️", chaos: -1 },
      { text: "Start assigning objects their own zodiac signs.", result: "Your toaster is a Scorpio. 🔥♏", chaos: 1 },
      { text: "Make it a guest star in your texts.", result: "It sends GIFs now. 📲🫢", chaos: 2 },
      { text: "Insist it's a normal thing everyone does.", result: "It is not. But you’re committed. 🤷‍♀️", chaos: 0 }
    ]
  },
{
    text: "💌 One of you finds an old cringey message from when you first started flirting.",
    choices: [
      { text: "Read it dramatically in a fake accent.", result: "Oscar-worthy. Deeply cursed. 🎭📱", chaos: 1 },
      { text: "Threaten to frame it.", result: "It now lives on the fridge. 🖼️😳", chaos: 2 },
      { text: "Turn it into a meme template.", result: "Goes too far. Becomes lore. 📸🔥", chaos: 3 },
      { text: "Delete it quickly and deny everything.", result: "They screenshot it already. 🫣", chaos: 2 },
      { text: "Save it in a folder called 'evidence.'", result: "Mildly terrifying. Also sweet. 🗂️💘", chaos: 0 }
    ]
  } // ✅ Remove comma here
];   // ✅ Close the array

  
// Level 4: Domestic Chaos
const level4Cards = [
  {
    text: "📅 You both try to plan the same weekend… very differently.",
    choices: [
      { text: "Try to do both plans in one day.", result: "Brunch, beach, and burnout. 🥞🏖️😵", chaos: 2 },
      { text: "Rock-paper-scissors for control.", result: "A fair fight. Until rematch. ✊✋✌️", chaos: 1 },
      { text: "Accidentally double-book your own dinner.", result: "You charm everyone. Barely. 🍝😅", chaos: 3 },
      { text: "Cancel it all and binge a show instead.", result: "Zero regrets. Maximum snacks. 📺🍕", chaos: 0 },
      { text: "Create a shared Google Calendar... ironically.", result: "Now it's serious. But color-coded. 🌈🧠", chaos: -1 }
    ]
  },
  {
    text: "📷 An unplanned photo together turns out really cute.",
    choices: [
      { text: "Immediately set it as your lock screen.", result: "Bold. But adorable. 📱💖", chaos: 2 },
      { text: "Claim it’s 'just good lighting.'", result: "Sure, Jan. ☀️🙃", chaos: 1 },
      { text: "Send it to your group chat for voting.", result: "Mixed reviews. Mostly fire emojis. 🔥🗳️", chaos: 0 },
      { text: "Use it to make a fake magazine cover.", result: "Creativity points unlocked. 📰✨", chaos: -1 },
      { text: "Print it out for the fridge.", result: "It’s giving 2006. In a good way. 🖨️🧲", chaos: 1 }
    ]
  },
  {
    text: "🎬 You binge a new show together… or so you thought.",
    choices: [
      { text: "Someone secretly watches ahead.", result: "The betrayal. The drama. 📺😱", chaos: 3 },
      { text: "Pretend you don’t know the spoilers.", result: "You deserve an Emmy. 🎭📉", chaos: 2 },
      { text: "Re-watch it pretending it's new.", result: "Awkward… but oddly sweet. 🔄❤️", chaos: 1 },
      { text: "Make a new rule: Only together.", result: "It’s a pact. You pinky swear. 🤝📺", chaos: 0 },
      { text: "Give up and start watching trash TV instead.", result: "Reality shows = real bonding. 📉🍿", chaos: -1 }
    ]
  },
  {
    text: "🎂 One of you tries to plan a surprise for the other's birthday.",
    choices: [
      { text: "Ask totally not-suspicious questions like 'what’s your favorite cake flavor again?'", result: "Smooth. Not really. 🎂🕵️‍♀️", chaos: 1 },
      { text: "Plan a full surprise party... and they find out.", result: "Pretend it was always a collab. 🎈😅", chaos: 2 },
      { text: "DIY decorations and mess up their name.", result: "Who’s ‘Clandia’? 🎉😂", chaos: 2 },
      { text: "Just show up with a cake and vibes.", result: "Honestly perfect. 🍰✨", chaos: -1 },
      { text: "Invite their friends before asking them.", result: "Bold. It works. Mostly. 📱🎊", chaos: 1 }
    ]
  },
  {
    text: "🎧 You finally share music playlists with each other.",
    choices: [
      { text: "Roast each other’s guilty pleasure songs.", result: "One of you still defends Pitbull. 🔥🎤", chaos: 2 },
      { text: "Make a chaotic joint playlist.", result: "It slaps. But genre whiplash. 🎶🤯", chaos: 1 },
      { text: "Stalk every old playlist they made.", result: "You learn too much. 🎧🔍", chaos: 2 },
      { text: "Send a flirty song as a subtle hint.", result: "Subtle... but received. 🎯❤️", chaos: 0 },
      { text: "Accidentally add their mom’s cumbia to the mix.", result: "Honestly? Kind of a banger. 🕺👵", chaos: -1 }
    ]
  }
];

// Level 5: Families, Culture & Crashes
const level5Cards = [
  {
    text: "🍚 Te invitan a una comida familiar... y no sabes si es almuerzo o cena.",
    choices: [
      { text: "Llegas a tiempo. Nadie más lo hace.", result: "Eres gringo por default. 🕐🍽️", chaos: 1 },
      { text: "Traes postre comprado y dices que lo hiciste tú.", result: "Sospechan. Aplauden igual. 🍰😅", chaos: 0 },
      { text: "Te sientas en la silla del abuelo.", result: "Grave error. Cambio de tema urgente. 😬🪑", chaos: 2 },
      { text: "Terminas lavando los platos con la tía.", result: "Ahora eres parte de la familia. 🧽👩‍🦱", chaos: -1 },
      { text: "Solo preguntas: ¿Hay ají?", result: "Te dan respeto inmediato. 🌶️👑", chaos: -1 }
    ]
  },
  {
    text: "💃 Una tía quiere que bailes salsa en plena sala.",
    choices: [
      { text: "Aceptas y lo das todo.", result: "La tía te graba. Te haces viral. 💃📱", chaos: 1 },
      { text: "Te escondes en la cocina.", result: "Te sacan igual. 🍳🚪", chaos: 2 },
      { text: "Bailas mal pero con flow.", result: "Lo importante es la actitud. 🕺🏽✨", chaos: 0 },
      { text: "Dices que prefieres reggaetón.", result: "Abuela pone cara. Peligro. 😐🔊", chaos: 3 },
      { text: "Pides clases privadas luego.", result: "Buena jugada. 👣💘", chaos: -1 }
    ]
  },
  {
    text: "☕ Le haces un cafecito... pero usaste la cafetera mal.",
    choices: [
      { text: "Sirves igual con confianza.", result: "Parece caldo. Pero se lo toma. ☕🤝", chaos: 2 },
      { text: "Confiesas y vas por uno de La Carreta.", result: "Perdonado. Bonus puntos. 🚗🥄", chaos: 0 },
      { text: "Le echas canela sin preguntar.", result: "¿Eres tú, Starbucks? 🙄🌰", chaos: 1 },
      { text: "Le sirves en una tacita mini.", result: "Estilo aprobado. Sabor no tanto. 🥄😅", chaos: 1 },
      { text: "Lo llamas espresso para sonar fancy.", result: "Tu pasaporte cubano se tambalea. 🛂☕", chaos: 3 }
    ]
  },
  {
    text: "🛒 Van juntos al mercado por primera vez.",
    choices: [
      { text: "Se pelean por cuál arroz es 'el bueno'.", result: "Terminan comprando los dos. Arroz diplomático. 🍚🤝", chaos: 1 },
      { text: "Agregan snacks al carrito en secreto.", result: "Al llegar a la caja: caos y picarones. 🛒😅", chaos: 2 },
      { text: "Discutir en voz alta si vale la pena la Inca Kola de 2L.", result: "Spoiler: sí vale. 🥤💛", chaos: 0 },
      { text: "Imitan a las señoras criticando precios.", result: "Se meten demasiado en el personaje. 👵📢", chaos: 1 },
      { text: "Compran ingredientes para hacer causa o croquetas.", result: "Fusion food incoming. 🇵🇪🇨🇺🔥", chaos: -1 }
    ]
  },
  {
    text: "🎆 Están con la familia viendo fuegos artificiales… hasta que alguien trae petardos ilegales.",
    choices: [
      { text: "Alguien grita '¡eso no es legal!' y se esconde.", result: "Ya te dicen 'el gringo'. 🇺🇸😳", chaos: 2 },
      { text: "Te ofrecen encender uno. Dices que sí.", result: "Ganas respeto y casi pierdes una ceja. 🔥💀", chaos: 3 },
      { text: "Grabas todo y haces un reel épico.", result: "Tu tío ahora tiene TikTok. 📱🎇", chaos: 1 },
      { text: "Te pones tapones en los oídos como abuela.", result: "Ella te aprueba. 💅👵", chaos: 0 },
      { text: "Gritas '¡Viva Cuba/Perú!' cada vez que explota uno.", result: "Patriotismo nivel máximo. 🎆🇨🇺🇵🇪", chaos: -1 }
    ]
  }
];

// Master Scenario Deck
const allScenarios = [
  ...level1Cards,
  ...level2Cards,
  ...level3Cards,
  ...level4Cards,
  ...level5Cards
];

function nextScenario() {
  document.getElementById("result").innerText = "";

  if (usedScenarioIndexes.size === allScenarios.length) {
    document.getElementById("scenarioBox").innerText = "Game over! 🎉";
    document.getElementById("choicesBox").innerHTML = "";
    return;
  }

  let index;
  do {
    index = Math.floor(Math.random() * allScenarios.length);
  } while (usedScenarioIndexes.has(index));

  usedScenarioIndexes.add(index);
  current = index;

  const scenario = allScenarios[index];
  document.getElementById("scenarioBox").innerText = scenario.text;

  const player = players[currentPlayerIndex % players.length];
  document.getElementById("playerTurn").innerText = `${player}'s Turn`;

  const choicesDiv = document.getElementById("choicesBox");
  choicesDiv.innerHTML = "";
  scenario.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.onclick = () => selectChoice(i);
    choicesDiv.appendChild(btn);
  });
}

function selectChoice(i) {
  const scenario = allScenarios[current];
  const choice = scenario.choices[i];

  document.getElementById("result").innerText = choice.result;
  chaosScore += choice.chaos;
  document.getElementById("chaosScore").innerText = chaosScore;

  currentPlayerIndex++;
}
