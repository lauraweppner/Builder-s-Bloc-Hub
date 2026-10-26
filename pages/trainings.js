/* ============================================================
   Builder's Bloc — Training Library
   ------------------------------------------------------------
   This is the ONLY file you edit to add, change, or retire a
   training. The sign-off page reads everything from here.

   TO ADD A TRAINING: copy one whole block from {  to  },
   paste it at the end of the list, and change:
     id        – short code, no spaces. NEVER change an id once
                 crews have used it (the checker uses it to
                 match sign-offs).
     title     – what the crews see
     frequency – "annual" or "quarterly"
     when      – optional: the month to give it (e.g. "May").
                 Shows on the iPad so foremen know it's due.
     minutes   – about how long it takes to present
     sections  – each has a heading and a list of points.
                 "say" is optional: a line for the foreman
                 to read out loud.
     questions – optional: questions to ask the crew, each with
                 the answer:  { q: "question", a: "answer" },
     statement – what each employee agrees to by signing

   TO RETIRE A TRAINING: add   active: false,   to its block.
   It disappears from the iPads but old sign-offs still count.

   After editing: bump the version in service-worker.js so
   the iPads pick up the new copy.
   ============================================================ */


window.BB_TRAININGS = [

  /* ---------------------------------------------------------- */
  {
    id: "harassment",
    title: "Harassment Prevention",
    frequency: "annual",
    minutes: 20,
    sections: [
      {
        heading: "Why we're here",
        say: "Everybody on this crew deserves to come to work and be treated with respect. Today is about what harassment looks like on a jobsite, and what to do if you see it or it happens to you.",
        points: [
          "Builder's Bloc does not tolerate harassment of any kind.",
          "This applies to everyone: employees, foremen, supers, office staff, subs, vendors, and customers.",
          "It applies anywhere we work: the jobsite, the shop, company trucks, group texts, and social media."
        ]
      },
      {
        heading: "What harassment is",
        points: [
          "Unwelcome treatment because of who someone is: race, color, religion, sex, pregnancy, sexual orientation, gender identity, national origin, age (40 and over), disability, or genetic information.",
          "Sexual harassment is unwelcome sexual comments, jokes, advances, touching, or requests for sexual favors.",
          "It also includes making someone's job depend on going along with it, like better hours or a better spot on the crew in exchange for a favor.",
          "It doesn't matter if it was \"just a joke.\" What matters is how it lands and whether it's unwelcome."
        ]
      },
      {
        heading: "What it looks like on a jobsite",
        points: [
          "Jokes, nicknames, or slurs about someone's race, religion, accent, or where they're from.",
          "Sexual comments, pictures, or videos, including ones passed around on phones.",
          "Graffiti or drawings in porta-johns, on walls, or on equipment.",
          "Touching, blocking someone's path, or standing over someone to intimidate them.",
          "\"Hazing\" a new guy in a way that targets who they are.",
          "Mocking someone's religious practice, clothing, or language."
        ]
      },
      {
        heading: "What to do if it happens to you or you see it",
        points: [
          "If you feel safe doing it, tell the person to stop.",
          "Report it to your foreman, your superintendent, or HR. You can always go straight to HR: Laura Weppner-Herndon, 314-581-6841.",
          "If your foreman is the problem, skip them and go to your super or HR.",
          "Report it even if it happened to someone else. You don't need proof to report."
        ]
      },
      {
        heading: "No retaliation",
        points: [
          "No one can be punished, demoted, cut hours, or picked on for reporting harassment or helping with an investigation.",
          "Retaliation is treated as seriously as the harassment itself."
        ]
      },
      {
        heading: "Foremen and supervisors",
        say: "If you run a crew, this part is for you.",
        points: [
          "If you see it, hear about it, or someone tells you about it, report it to HR the same day.",
          "Report it even if the employee asks you to keep it quiet. You can't promise to keep it secret.",
          "Don't investigate it yourself. Get it to HR.",
          "Everyone will be asked questions in an investigation. Keep it private and don't discuss it on the crew."
        ]
      }
    ],
    questions: [
      { q: "A guy on the crew keeps calling a coworker a nickname about where he's from. The coworker laughs along. Is that a problem? What should you do?",
        a: "Yes, it can be. Laughing along doesn't mean it's welcome. People often go along to fit in. Tell the guy to knock it off, and report it to your foreman, super, or HR. You don't need the coworker to complain first." },
      { q: "Someone shares a sexual video in the crew group text. What should you do?",
        a: "Don't share it, reply to it, or forward it. Report it to your foreman, super, or HR. The crew group text counts as the workplace, so it's covered by the policy." },
      { q: "Who can you call if you don't want to go to your foreman?",
        a: "Your superintendent, or HR directly: Laura Weppner-Herndon, 314-581-6841. You can always skip your foreman, especially if the foreman is part of the problem." }
    ],
    statement: "I attended this training. I understand Builder's Bloc's harassment policy, how to report harassment, and that retaliation is not allowed."
  },

  /* ---------------------------------------------------------- */
  {
    id: "injury-reporting",
    title: "What To Do When You Get Hurt",
    frequency: "quarterly",
    minutes: 15,
    sections: [
      {
        heading: "Report every injury, right away",
        say: "No matter how small, if you get hurt at work, we need to know that day. A small cut or a tweaked back today can turn into something bigger next week.",
        points: [
          "Tell your foreman immediately, before you leave the jobsite.",
          "Report even minor injuries: cuts, strains, something in your eye, a fall with no obvious injury.",
          "Late reports are harder to take care of and can hurt your claim."
        ]
      },
      {
        heading: "Who to call",
        points: [
          "EMERGENCY: call 911 first. Then call Laura (HR): 314-581-6841.",
          "NOT an emergency: call Laura first at 314-581-6841, then your superintendent.",
          "Put Laura's number in your phone today."
        ]
      },
      {
        heading: "Getting care",
        points: [
          "Laura directs your care. She'll tell you where to go and set up the appointment.",
          "Unless it's an emergency, don't go to a clinic or your own doctor on your own. Call first.",
          "An injured worker never leaves the jobsite alone. A trusted Builder's Bloc employee drives with you in the same vehicle."
        ]
      },
      {
        heading: "Drug testing and refusing care",
        points: [
          "Post-accident drug testing follows company policy.",
          "If you decide not to get treatment, you must sign the Refusal of Care form that same day.",
          "Read the form before you sign. It covers refusing care, ambulance transport, and the drug screen. Declining treatment also means declining the drug test."
        ]
      },
      {
        heading: "Foremen: paperwork the same day",
        points: [
          "Fill out the accident report forms on the iPad (Field Portal → Incident Reporting).",
          "The injured employee, the foreman, and the superintendent each complete their own form.",
          "Get witness names and take photos of the area if it's safe."
        ]
      }
    ],
    questions: [
      { q: "You cut your hand and it stops bleeding after a few minutes. Do you report it?",
        a: "Yes. Every injury gets reported to your foreman right away, before you leave the jobsite, no matter how small. A small cut can get infected, and if it isn't reported that day it's harder to take care of." },
      { q: "It's not an emergency. Who do you call first?",
        a: "Laura (HR) first at 314-581-6841, then your superintendent. Laura tells you where to go and sets up the appointment. If it IS an emergency, call 911 first, then Laura." },
      { q: "Can an injured worker drive himself to the clinic?",
        a: "No. An injured worker never leaves the jobsite alone. A trusted Builder's Bloc employee drives with them in the same vehicle." }
    ],
    statement: "I attended this training. I understand I must report every injury right away, who to call, and that I cannot leave the site alone after an injury."
  },

  /* ---------------------------------------------------------- */
  {
    id: "cold-stress",
    title: "Cold Weather Safety",
    frequency: "annual",
    when: "November",
    minutes: 10,
    sections: [
      {
        heading: "Why it matters",
        say: "Cold, wind, and wet clothes pull heat out of your body faster than you think. It doesn't have to be below freezing to be dangerous.",
        points: [
          "Wind and wet clothing make cold much more dangerous.",
          "Cold makes you slower and clumsier, which leads to slips, falls, and hand injuries."
        ]
      },
      {
        heading: "Know the signs",
        points: [
          "Hypothermia: uncontrollable shivering, confusion, slurred speech, clumsiness, very sleepy. Shivering may STOP as it gets worse.",
          "Frostbite: numbness, skin that turns white or grayish-yellow, feels hard or waxy. Usually fingers, toes, ears, nose.",
          "Trench foot: cold, wet feet for long periods; red, swollen, numb, or tingling feet."
        ]
      },
      {
        heading: "Prevent it",
        points: [
          "Dress in layers: a base layer that pulls sweat away, a warm middle layer, and a wind/water-resistant outer layer.",
          "Wear a hat or liner under your hard hat, insulated gloves, and waterproof boots.",
          "Keep a dry change of socks, gloves, and a base layer in the truck.",
          "Take warm-up breaks in a heated truck or trailer. Drink warm, sweet drinks and water.",
          "Watch your buddy. People with hypothermia often don't realize it."
        ]
      },
      {
        heading: "If someone shows signs",
        points: [
          "Hypothermia signs (confusion, slurred speech, shivering stops): call 911, then Laura at 314-581-6841.",
          "Get them to a warm area, remove wet clothing, and wrap them in dry blankets.",
          "Frostbite: get warm, don't rub the area, and don't use direct high heat. Report it like any injury."
        ]
      }
    ],
    questions: [
      { q: "A coworker stopped shivering and is acting confused. Is he getting better?",
        a: "No, he's getting worse. Shivering stopping plus confusion are signs of serious hypothermia. Call 911, then Laura. Get him somewhere warm, take off wet clothes, and wrap him in dry blankets." },
      { q: "What should you keep in the truck on cold days?",
        a: "A dry change of socks, gloves, and a base layer, plus water and something warm to drink. Wet clothes pull heat out of your body fast." }
    ],
    statement: "I attended this training and understand the signs of cold stress, how to prevent it, and what to do if a coworker shows symptoms."
  },

  /* ---------------------------------------------------------- */
  {
    id: "heat-stress",
    title: "Hot Weather Safety",
    frequency: "annual",
    when: "May",
    minutes: 10,
    sections: [
      {
        heading: "Why it matters",
        say: "Heat illness can go from feeling bad to life-threatening fast. The first hot days of the year are the most dangerous, because our bodies aren't used to it yet.",
        points: [
          "Heat, humidity, direct sun, and heavy work all add up.",
          "Hard hats, vests, harnesses, and long sleeves hold heat in.",
          "Heat makes you tired and careless, which leads to other injuries."
        ]
      },
      {
        heading: "Know the signs",
        points: [
          "Heat exhaustion: heavy sweating, cool clammy skin, dizziness, headache, nausea, weakness, muscle cramps.",
          "Heat stroke (EMERGENCY): confusion, slurred speech, passing out, seizures, very high body temperature. Skin may be hot and dry OR still sweating.",
          "Heat stroke can kill. If someone is confused or acting strange in the heat, treat it as heat stroke."
        ]
      },
      {
        heading: "Prevent it",
        points: [
          "Drink water often, about a cup every 15 to 20 minutes, even if you're not thirsty. Check the Hydration Chart on the portal.",
          "Skip energy drinks and alcohol. They dry you out.",
          "Take breaks in the shade or a cool truck, and take more of them as it gets hotter.",
          "New and returning workers need time to get used to the heat. Go easier the first week and keep an eye on them.",
          "Do the heaviest work early in the day when you can.",
          "Watch your buddy. People with heat illness often don't notice it in themselves."
        ]
      },
      {
        heading: "If someone shows signs",
        points: [
          "Heat stroke signs (confusion, passing out, seizure): call 911, then Laura at 314-581-6841. Start cooling them right away while you wait.",
          "Cool them fast: move to shade, remove extra layers, soak them with cool water, fan them, and put ice or cold packs on the neck, armpits, and groin.",
          "Heat exhaustion: move to shade, loosen clothing, give sips of water, and cool them down. If they don't get better quickly or get worse, call 911.",
          "Never leave someone with heat illness alone, and never send them to sit in a hot truck. Report it like any injury."
        ]
      }
    ],
    questions: [
      { q: "It's the first hot week of the year and a new guy just started. What should you watch for?",
        a: "He isn't used to the heat yet, so he's at the highest risk. Have him take more breaks, drink water often, and go easier the first week. Check on him through the day." },
      { q: "A coworker is sweating a lot, dizzy, and has a headache. What do you do?",
        a: "Those are signs of heat exhaustion. Get him to shade, loosen his clothes, give him sips of water, and cool him down. Stay with him. If he doesn't improve quickly or gets confused, call 911 and then Laura." },
      { q: "A coworker is confused and talking strange on a hot afternoon. What do you do?",
        a: "Treat it as heat stroke, which is an emergency. Call 911, then Laura. Start cooling him right away with water, ice on the neck, armpits, and groin, and fanning. Don't leave him alone." }
    ],
    statement: "I attended this training and understand the signs of heat illness, how to prevent it, and what to do if a coworker shows symptoms."
  }

];
