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
     minutes   – about how long it takes to present
     sections  – each has a heading and a list of points.
                 "say" is optional: a line for the foreman
                 to read out loud.
     questions – optional: questions to ask the crew
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
      "A guy on the crew keeps calling a coworker a nickname about where he's from. The coworker laughs along. Is that a problem? What should you do?",
      "Someone shares a sexual video in the crew group text. What should you do?",
      "Who can you call if you don't want to go to your foreman?"
    ],
    statement: "I attended this training. I understand Builder's Bloc's harassment policy, how to report harassment, and that retaliation is not allowed."
  },

  /* ---------------------------------------------------------- */
  {
    id: "injury-reporting",
    title: "What To Do When You Get Hurt",
    frequency: "annual",
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
      "You cut your hand and it stops bleeding after a few minutes. Do you report it?",
      "It's not an emergency. Who do you call first?",
      "Can an injured worker drive himself to the clinic?"
    ],
    statement: "I attended this training. I understand I must report every injury right away, who to call, and that I cannot leave the site alone after an injury."
  },

  /* ---------------------------------------------------------- */
  {
    id: "cold-stress",
    title: "Cold Weather Safety",
    frequency: "quarterly",
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
      "A coworker stopped shivering and is acting confused. Is he getting better?",
      "What should you keep in the truck on cold days?"
    ],
    statement: "I attended this training and understand the signs of cold stress, how to prevent it, and what to do if a coworker shows symptoms."
  }

];
