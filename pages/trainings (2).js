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
     audience  – who has to take it:
                   "all"          every field employee
                   "supervisors"  foremen and superintendents
                   "drivers"      company vehicle drivers (from your driver list)
                   "cdl"          CDL / boom truck drivers only
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
    audience: "all",
    minutes: 25,
    sections: [
      {
        heading: "Why we're here",
        say: "Everybody on this crew deserves to come to work and be treated with dignity and respect. Today is about what harassment looks like on a jobsite, what to do if you see it or it happens to you, and what happens when someone breaks this policy.",
        points: [
          "Builder's Bloc does not tolerate harassment or discrimination of any kind. This is in the Employee Handbook under the Anti-Harassment and Discrimination Policy.",
          "It applies to everyone, no matter their position: employees, foremen, supers, office staff, and ownership.",
          "It also covers how we treat customers, suppliers, subs, and vendors, and how they treat us.",
          "It applies anywhere work happens: the jobsite, the shop, company trucks, group texts, and social media."
        ]
      },
      {
        heading: "What harassment is",
        points: [
          "Harassment is anything said or done to threaten, intimidate, or pressure someone, or that's offensive or unwelcome because of who they are.",
          "That includes their race, color, national origin, religion, age, sex, pregnancy, sexual orientation, gender identity or expression, disability, genetic information, marital status, veteran status, or appearance.",
          "Sexual harassment is unwelcome sexual advances, requests for sexual favors, or other sexual comments or contact.",
          "It also includes making someone's job depend on going along with it, like better hours, a raise, or a better spot on the crew in exchange for a favor, or punishing someone for saying no.",
          "It doesn't matter if it was \"just kidding.\" What matters is whether it's unwelcome."
        ]
      },
      {
        heading: "What it looks like on a jobsite",
        points: [
          "Jokes, nicknames, slurs, or stereotypes about someone's race, religion, accent, age, or where they're from.",
          "Sexual jokes, comments, or propositions, and asking someone out again after they've said no.",
          "Whistling, catcalling, staring or leering, and obscene gestures or sounds.",
          "Sexual or offensive pictures, videos, posters, or calendars, including in trucks and trailers and on phones, texts, and social media.",
          "Graffiti or drawings in porta-johns, on walls, or on equipment.",
          "Unwanted touching of any kind: patting, pinching, brushing up against, hugging, or cornering someone.",
          "\"Hazing\" a new guy in a way that targets who they are, or mocking someone's religion, clothing, or language."
        ]
      },
      {
        heading: "What to do if it happens to you or you see it",
        points: [
          "If you feel safe doing it, tell the person to stop.",
          "Report it to your foreman, your superintendent, any member of management, or HR. You can always go straight to HR: Laura Weppner-Herndon, 314-581-6841.",
          "If your foreman is the problem, skip them and go to your super, management, or HR.",
          "Report it even if it happened to someone else. You don't need proof to report.",
          "Every report is investigated. Reports are kept as confidential as possible and only shared with the people who need to know."
        ]
      },
      {
        heading: "No retaliation",
        points: [
          "No one can be punished, demoted, have hours cut, or be picked on for reporting harassment in good faith.",
          "That protection also covers anyone who is a witness in an investigation or helps investigate.",
          "Making a report will not be held against you or hurt your job.",
          "Making a false report on purpose, to get someone in trouble, is also a violation of the policy."
        ]
      },
      {
        heading: "What happens if someone breaks the policy",
        points: [
          "Builder's Bloc takes action right away when it learns of harassment, discrimination, or retaliation.",
          "Depending on how serious it is, discipline can be a verbal or written warning, suspension, or termination.",
          "Any act of harassment or discrimination is a violation of company conduct rules."
        ]
      },
      {
        heading: "Foremen and supervisors",
        say: "If you run a crew, this part is for you. You have extra responsibility under this policy.",
        points: [
          "If you see it, hear about it, or someone tells you about it, report it to HR or management immediately.",
          "Knowingly allowing harassment, or not reporting it right away, is a violation of the policy. Supervisors who do that can be disciplined too.",
          "Report it even if the employee asks you to keep it quiet. You can't promise to keep it secret.",
          "Don't investigate it yourself. Get it to HR.",
          "Keep it private. Don't discuss it on the crew."
        ]
      }
    ],
    questions: [
      { q: "A guy on the crew keeps calling a coworker a nickname about where he's from. The coworker laughs along. Is that a problem? What should you do?",
        a: "Yes, it can be. Laughing along doesn't mean it's welcome. People often go along to fit in. Tell the guy to knock it off, and report it to your foreman, super, or HR. You don't need the coworker to complain first." },
      { q: "Someone shares a sexual video in the crew group text. What should you do?",
        a: "Don't share it, reply to it, or forward it. Report it to your foreman, super, or HR. Texts and social media are covered by the policy, so the crew group text counts as the workplace." },
      { q: "Who can you go to if you don't want to go to your foreman?",
        a: "Your superintendent, any member of management, or HR directly: Laura Weppner-Herndon, 314-581-6841. You can always skip your foreman, especially if the foreman is part of the problem." },
      { q: "You were a witness and answered questions in an investigation. Now the guy who was reported is giving you a hard time about it. What do you do?",
        a: "Report it. Witnesses are protected from retaliation the same as the person who made the complaint. Retaliation is its own violation of the policy, and it can lead to discipline up to termination." },
      { q: "As a foreman, you overhear a crew member making sexual comments to a coworker. She says it's fine and asks you not to say anything. What do you do?",
        a: "Report it to HR or management immediately anyway. Supervisors who know about harassment and don't report it are in violation of the policy themselves. You can tell her it will be handled as privately as possible." }
    ],
    statement: "I attended this training. I understand Builder's Bloc's Anti-Harassment and Discrimination Policy, how to report harassment, that retaliation is not allowed, and that violations can lead to discipline up to and including termination."
  },

  /* ---------------------------------------------------------- */
  {
    id: "injury-reporting",
    title: "What To Do When You Get Hurt",
    frequency: "quarterly",
    audience: "all",
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
          "EMERGENCY: call 911 first.",
          "Then someone MUST call Laura (HR) at 314-581-6841. It can be the injured employee, the foreman, or the superintendent. It doesn't matter who, as long as Laura gets the call.",
          "Make sure the superintendent knows too.",
          "Laura's number works any time, day or night. Put it in your phone today."
        ]
      },
      {
        heading: "Getting care",
        points: [
          "If you need medical care, ASK for it.",
          "Laura directs your care. She'll tell you where to go and set up the appointment. Unless it's an emergency, don't go anywhere for treatment until Laura has been called.",
          "When you go where the company sends you, the company pays for your treatment.",
          "Missouri law lets you choose your own doctor for a work injury, but then you pay for it, and your health insurance won't cover it either.",
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
      { q: "It's not an emergency. Who needs to be told, and who has to call Laura?",
        a: "Tell your foreman right away, and make sure Laura gets a call at 314-581-6841. You, the foreman, or the super can call her. Laura tells you where to go and sets up the appointment. If it IS an emergency, call 911 first, then Laura." },
      { q: "You want to go to your own doctor instead of where Laura sends you. Can you?",
        a: "Missouri lets you, but you'll pay for it yourself, and your health insurance won't cover a work injury. If you go where the company sends you, the company pays for all of it." },
      { q: "Can an injured worker drive himself to the clinic?",
        a: "No. An injured worker never leaves the jobsite alone. A trusted Builder's Bloc employee drives with them in the same vehicle." }
    ],
    statement: "I attended this training. I understand I must report every injury right away, that Laura must be called so she can direct my care, and that I cannot leave the site alone after an injury."
  },

  /* ---------------------------------------------------------- */
  {
    id: "cold-stress",
    title: "Cold Weather Safety",
    frequency: "annual",
    audience: "all",
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
    audience: "all",
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
  },

  /* ---------------------------------------------------------- */
  {
    id: "drug-alcohol",
    title: "Drug & Alcohol Policy",
    frequency: "annual",
    audience: "all",
    minutes: 15,
    sections: [
      {
        heading: "Why we're here",
        say: "Our work is dangerous enough sober. One person under the influence can get himself or someone else badly hurt. Builder's Bloc is a drug and alcohol free workplace, and today we're going over what that means.",
        points: [
          "The policy covers everyone doing business for Builder's Bloc: employees, subs, vendors, and applicants.",
          "It applies during all working hours, anytime you're representing the company, while on call, and anywhere on company property, including trucks."
        ]
      },
      {
        heading: "What's not allowed",
        points: [
          "Using illegal drugs, or misusing prescription drugs.",
          "Being under the influence of drugs or alcohol at work, or doing your job while under the influence.",
          "Having open containers of alcohol at work.",
          "Selling, buying, passing along, or having illegal drugs or someone else's prescription drugs.",
          "Marijuana counts as an illegal drug under company policy, even if you got it legally."
        ]
      },
      {
        heading: "Drug and alcohol testing",
        points: [
          "You can be tested if a supervisor has reasonable suspicion that you're under the influence.",
          "You can be tested after a work-related accident.",
          "Refusing treatment after an injury also means refusing the drug test. That's on the Refusal of Care form."
        ]
      },
      {
        heading: "Prescription medicine",
        points: [
          "If a medicine makes you drowsy, dizzy, or slows you down, you shouldn't be running equipment, working at heights, or driving.",
          "Talk to your foreman or HR before you start work if a medicine could affect you. You don't have to say what it's for."
        ]
      },
      {
        heading: "Getting help",
        say: "If you're struggling with drugs or alcohol, asking for help is the right move, and the company wants you to.",
        points: [
          "The company encourages anyone with a drug or alcohol problem to get help voluntarily.",
          "Talk to HR: Laura Weppner-Herndon, 314-581-6841. It's kept private.",
          "Asking for help before there's a problem is very different from getting caught after one."
        ]
      },
      {
        heading: "What happens if someone breaks the policy",
        points: [
          "Violations of the drug and alcohol policy can lead to discipline up to and including termination.",
          "If you see someone who seems impaired, tell your foreman or super right away. It could save a life."
        ]
      }
    ],
    questions: [
      { q: "You have a medical marijuana card and only use it at home. Can you be disciplined if you test positive at work?",
        a: "Yes. Under company policy, marijuana is treated as an illegal drug even if you got it legally, and you can be tested after an accident or on reasonable suspicion." },
      { q: "Your doctor gave you a new pain medicine that makes you drowsy. What should you do before work?",
        a: "Tell your foreman or HR before you start. You shouldn't run equipment, work at heights, or drive while it's affecting you. You don't have to say what the medicine is for." },
      { q: "A coworker shows up smelling like alcohol and stumbling. What do you do?",
        a: "Tell your foreman or super right away. Don't let him run equipment, work at heights, or drive. The supervisor will handle it from there." }
    ],
    statement: "I attended this training. I understand Builder's Bloc's Drug Policy, that I can be tested after an accident or on reasonable suspicion, and that violations can lead to discipline up to and including termination."
  },

  /* ---------------------------------------------------------- */
  {
    id: "reasonable-suspicion",
    title: "Reasonable Suspicion for Supervisors",
    frequency: "annual",
    audience: "supervisors",
    minutes: 20,
    sections: [
      {
        heading: "Why we're here",
        say: "As a foreman or super, you're the one most likely to notice when someone isn't right. This training is about what to look for, what to do, and what not to do.",
        points: [
          "Reasonable suspicion means you can point to specific things you saw, heard, or smelled that day that suggest someone is under the influence.",
          "It's not a hunch, a rumor, or what someone did last weekend.",
          "Company policy allows a reasonable suspicion test for anyone who appears to be under the influence."
        ]
      },
      {
        heading: "What to look for",
        points: [
          "Appearance: red or glassy eyes, pupils very large or very small, flushed or pale face, sweating, unusually messy.",
          "Behavior: unusually angry, nervous, or giddy, falling asleep, mood swings, arguing, not following directions.",
          "Speech: slurred, rambling, very fast or very slow, confused.",
          "Movement: stumbling, swaying, poor coordination, shaky hands, dropping things.",
          "Odor: alcohol or marijuana on their breath, clothes, or in the truck.",
          "Work: near misses, careless mistakes, unsafe behavior that's out of character."
        ]
      },
      {
        heading: "What to do",
        points: [
          "Take them off any dangerous work right away: no equipment, no heights, no power tools.",
          "If possible, have a second supervisor observe them too.",
          "Fill out the Reasonable Suspicion Checklist on the iPad (Field Portal → Incident Reporting). Write down exactly what you saw, heard, and smelled, and the times.",
          "Call Laura (HR) at 314-581-6841. She'll handle the testing.",
          "NEVER let them drive. Not a company truck and not their own vehicle. Someone takes them where they need to go."
        ]
      },
      {
        heading: "What NOT to do",
        points: [
          "Don't accuse them of being drunk or high, and don't try to diagnose what they took. Describe what you see: \"You're slurring and unsteady, and I need to take you off the job.\"",
          "Don't argue, threaten, or get physical. If they become aggressive, step back and call your super or 911.",
          "Don't search them, their belongings, or their vehicle.",
          "Don't talk about it with the crew. It's private."
        ]
      },
      {
        heading: "CDL drivers",
        points: [
          "If you supervise a boom truck (CDL) driver, federal DOT rules have their own testing requirements. Call Laura before anything else.",
          "A CDL driver suspected of being under the influence cannot drive or perform any safety-sensitive work until cleared."
        ]
      }
    ],
    questions: [
      { q: "A guy on your crew was out partying last night, according to the crew. He seems fine today. Is that reasonable suspicion?",
        a: "No. Reasonable suspicion has to be based on what you personally see, hear, or smell today. Rumors and what someone did last night don't count." },
      { q: "A worker is slurring, stumbling, and smells like alcohol. He says he's fine and wants to drive home. What do you do?",
        a: "Take him off the work, fill out the Reasonable Suspicion Checklist, and call Laura. Do NOT let him drive, not even his own car. Arrange a ride." },
      { q: "What should you say to the employee?",
        a: "Describe what you observed, without accusing: \"I've noticed you're unsteady and your speech is slurred, so I need to take you off the job and call HR.\" Don't say \"you're drunk\" or \"you're high.\"" }
    ],
    statement: "I attended this training. I understand what reasonable suspicion is, how to document it on the Reasonable Suspicion Checklist, that I must call HR, and that a suspected employee must never be allowed to drive."
  },

  /* ---------------------------------------------------------- */
  {
    id: "vehicles",
    title: "Company Vehicles & Distracted Driving",
    frequency: "annual",
    audience: "drivers",
    minutes: 15,
    sections: [
      {
        heading: "Why we're here",
        say: "Driving is one of the most dangerous things we do every day. A crash in a company truck can hurt you, your crew, and the public, and it costs the company more than almost anything else.",
        points: [
          "Only approved drivers may drive company vehicles. You must have a valid license.",
          "Tell Laura right away if your license is suspended, restricted, or expired, or if you get a DUI or DWI. You can't drive a company vehicle until it's cleared up."
        ]
      },
      {
        heading: "Phones and distractions",
        points: [
          "If you use your phone while driving a company vehicle, it MUST be hands-free. Hands-free devices are available if you need one. Ask.",
          "No texting, reading, typing, or watching anything while driving. Pull over somewhere safe first.",
          "Any ticket or fine you get while driving a company vehicle is your responsibility.",
          "Breaking the hands-free policy can lead to discipline up to and including termination."
        ]
      },
      {
        heading: "Safe driving habits",
        points: [
          "Everyone in the vehicle wears a seatbelt, every trip.",
          "Follow the speed limit and leave extra stopping distance, especially when loaded or towing.",
          "Walk around the vehicle before you back up. Use a spotter whenever you can. Most fleet accidents happen backing.",
          "Secure every load. Anything that can fly out of a truck bed or trailer will.",
          "Never drive tired, impaired, or on medicine that makes you drowsy."
        ]
      },
      {
        heading: "If you're in an accident",
        points: [
          "Stop. Check for injuries. Call 911 if anyone is hurt or the road is blocked.",
          "Call the police so there's a report, even for a small accident.",
          "Take photos of all vehicles, the scene, license plates, and the other driver's license and insurance card.",
          "Don't argue or admit fault. Just stick to the facts.",
          "Call your foreman and Laura (314-581-6841) right away, before you leave the scene if you can."
        ]
      }
    ],
    questions: [
      { q: "You need to call your foreman while driving to the job. Can you?",
        a: "Only hands-free. Holding the phone, texting, or reading while driving a company vehicle is against policy. If you don't have a hands-free device, ask for one, or pull over somewhere safe." },
      { q: "You backed into a pole in a parking lot. There's barely a scratch and nobody saw. What do you do?",
        a: "Report it. Take photos, call your foreman and Laura. Small accidents still need to be reported, and hiding one is worse than the scratch." },
      { q: "You got a DUI over the weekend in your own car. Do you need to tell anyone at work?",
        a: "Yes. Tell Laura right away. It affects whether you can drive company vehicles and the company's insurance." }
    ],
    statement: "I attended this training. I understand the Hands-Free Driving Policy, that I am responsible for fines I get while driving a company vehicle, how to report an accident, and that I must report any change to my license."
  },

  /* ---------------------------------------------------------- */
  {
    id: "timekeeping",
    title: "Timekeeping & Getting Paid Right",
    frequency: "annual",
    audience: "all",
    minutes: 10,
    sections: [
      {
        heading: "Why we're here",
        say: "You get paid for every hour you work. That only works if your time is recorded right, every day.",
        points: [
          "The payroll week runs Sunday through Saturday. Payday is every Friday.",
          "Your digital timesheet is your official record of hours worked."
        ]
      },
      {
        heading: "Record ALL your time",
        points: [
          "Record your real start and end times. Not what you were scheduled for, what you actually worked.",
          "Work time includes loading or unloading the truck at the start or end of the day, cleanup, and driving between job sites during the day.",
          "Never work \"off the clock.\" Not before you clock in, not after you clock out, not through lunch.",
          "Only fill out your own time, never someone else's. Falsifying time is dishonesty and can lead to termination."
        ]
      },
      {
        heading: "Overtime",
        points: [
          "Overtime is anything over 40 hours in the payroll week, paid at 1.5 times your regular rate.",
          "Overtime must be approved ahead of time by senior management.",
          "If you do work overtime, record it. You will be paid for all hours worked. Working unapproved overtime is a conversation with your foreman, not unpaid time."
        ]
      },
      {
        heading: "Foremen",
        say: "If you run a crew, this part is for you.",
        points: [
          "Never ask or allow anyone to work off the clock, start early without clocking in, or leave hours off their timesheet.",
          "Never change someone's time without telling them and getting it approved.",
          "If someone's time looks wrong, fix it with them and let payroll know."
        ]
      },
      {
        heading: "Check your pay",
        points: [
          "Look over your pay stub every Friday.",
          "If something's wrong, tell your manager, HR, or payroll right away. Mistakes will be corrected."
        ]
      }
    ],
    questions: [
      { q: "Your foreman asks you to load the truck at the shop before you clock in. What should you do?",
        a: "Clock in first. Loading the truck is work time. If you're asked to work off the clock, tell HR." },
      { q: "You worked 3 hours of overtime this week that wasn't pre-approved. Do you put it on your timesheet?",
        a: "Yes. Always record every hour you work, and you'll be paid for it. Talk to your foreman about getting overtime approved ahead of time going forward." },
      { q: "A buddy asks you to clock him in because he's running late. Can you?",
        a: "No. Only fill out your own time. Clocking in for someone else is falsifying time and can get you both terminated." }
    ],
    statement: "I attended this training. I understand I must record all hours I work accurately, never work off the clock, and report any pay errors."
  },

  /* ---------------------------------------------------------- */
  {
    id: "workplace-violence",
    title: "Workplace Violence & Threats",
    frequency: "annual",
    audience: "all",
    minutes: 10,
    sections: [
      {
        heading: "Why we're here",
        say: "Tempers run hot on a jobsite sometimes. Today is about where the line is, and what to do when someone crosses it.",
        points: [
          "Violent, threatening, or intimidating behavior is not tolerated and can lead to discipline up to and including termination.",
          "It applies to coworkers, subs, customers, and the public, on the jobsite, in trucks, and on phones and social media."
        ]
      },
      {
        heading: "What counts",
        points: [
          "Hitting, shoving, fighting, or throwing things at someone.",
          "Threats, including \"jokes\" about hurting someone or bringing a weapon to work.",
          "Getting in someone's face, blocking them in, or following them to intimidate them.",
          "Damaging someone's property or tools out of anger.",
          "Threatening texts, calls, or social media posts about coworkers.",
          "Road rage while driving for work."
        ]
      },
      {
        heading: "Warning signs worth reporting",
        points: [
          "Someone talking about hurting people or about weapons in a threatening way.",
          "Big changes in behavior, constant anger, or talk of getting even with someone.",
          "A domestic situation following someone to the job, like an ex showing up or making threats.",
          "You don't have to be sure. Report it and let HR and management decide."
        ]
      },
      {
        heading: "What to do",
        points: [
          "If someone is in danger right now, get away and call 911.",
          "Don't try to break up a fight or confront an angry person yourself. Get space and get help.",
          "Report threats and warning signs to your foreman, super, management, or HR (314-581-6841).",
          "Reports are kept as private as possible, and you're protected from retaliation for reporting."
        ]
      }
    ],
    questions: [
      { q: "A coworker says \"one of these days I'm going to come in here and take care of everybody\" and laughs. What do you do?",
        a: "Report it to your foreman, super, or HR right away. Threats are taken seriously even when they're said as a joke. You don't have to decide whether it's real." },
      { q: "Two guys on the crew start shoving each other. Should you jump in and break it up?",
        a: "No. Get space, tell them to stop from a distance if it's safe, and get your foreman or super. If anyone is getting hurt or there's a weapon, call 911." }
    ],
    statement: "I attended this training. I understand that violence, threats, and intimidation are not tolerated, and I know how to report them."
  },

  /* ---------------------------------------------------------- */
  {
    id: "active-threat",
    title: "Active Shooter / Active Threat on a Jobsite",
    frequency: "annual",
    audience: "all",
    minutes: 15,
    sections: [
      {
        heading: "Why we're here",
        say: "This is something nobody wants to think about. But jobsites are open, and if it ever happens, the people who already have a plan are the ones most likely to get out. The plan is simple: Run. Hide. Fight.",
        points: [
          "An active threat is anyone trying to hurt people, with a gun, a knife, a vehicle, or anything else.",
          "These events happen fast, often in minutes, before police can get there. What you do in those first moments matters most."
        ]
      },
      {
        heading: "Before it ever happens",
        points: [
          "Know the jobsite address. You'll need to tell 911 exactly where you are.",
          "When you get to a new site, notice at least two ways out, and where there's solid cover: concrete walls, foundations, the engine side of a vehicle.",
          "Know where the crew meets if you have to leave the site in a hurry."
        ]
      },
      {
        heading: "RUN — your first choice",
        points: [
          "If there's a way out, get out. Leave your tools and belongings.",
          "Move away from the sound and keep going. Get as much distance as you can.",
          "Help others come with you if you can, but don't wait for people who won't move.",
          "Keep others from walking into the area. Call 911 once you're safe."
        ]
      },
      {
        heading: "HIDE — if you can't get out",
        points: [
          "Get out of sight, behind something solid that can stop a bullet: concrete, block, a vehicle's engine block. Drywall, wood framing, and plastic will NOT stop bullets.",
          "If you can get into a trailer or room, lock or barricade the door and stay away from it and the windows.",
          "Silence your phone, including vibrate. Stay quiet.",
          "Text 911 if you can't talk safely."
        ]
      },
      {
        heading: "FIGHT — only as a last resort",
        points: [
          "Only if your life is in immediate danger and you can't run or hide.",
          "Act together if others are with you. Commit fully.",
          "Use whatever is around you. You are surrounded by tools."
        ]
      },
      {
        heading: "When police arrive",
        points: [
          "Their job is to stop the threat first, not to help the injured.",
          "Keep your hands empty and visible. Put down anything in your hands, including tools and phones.",
          "Follow every command. Don't run toward officers, grab them, or point.",
          "Once you're safe, go to the meeting point, check in with your foreman so everyone is accounted for, and call Laura (314-581-6841)."
        ]
      },
      {
        heading: "When calling 911",
        points: [
          "Give the exact jobsite address.",
          "Describe the attacker: how many, what they look like, what weapon, where they are, and which way they're going.",
          "Tell them how many people are on site and if anyone is hurt."
        ]
      }
    ],
    questions: [
      { q: "You hear gunshots on the other side of the site and there's an open path to the street. What do you do?",
        a: "RUN. Leave everything, go away from the sound, take others with you if you can, and call 911 once you're safe." },
      { q: "You can't get out, and the only cover nearby is a framed wall and a parked pickup. Where do you go?",
        a: "Behind the pickup, on the engine side. Framed walls and drywall won't stop a bullet. The engine block gives much better protection." },
      { q: "Police come onto the site while you're holding a hammer and your phone. What do you do?",
        a: "Drop everything, keep your hands up and visible, and follow their commands. Don't run toward them." }
    ],
    statement: "I attended this training. I understand Run, Hide, Fight, how to call 911 with the jobsite address, and what to do when police arrive."
  },

  /* ---------------------------------------------------------- */
  {
    id: "modified-duty",
    title: "Modified Duty & Return to Work",
    frequency: "annual",
    audience: "all",
    minutes: 10,
    sections: [
      {
        heading: "Why we're here",
        say: "If you get hurt on the job, the goal is to get you healed and back to your normal paycheck as soon as it's safe. Modified duty is how we do that.",
        points: [
          "Modified duty, sometimes called light duty, is work that fits within the restrictions your doctor gives you.",
          "When it's available, it keeps you working and earning while you heal, instead of sitting at home."
        ]
      },
      {
        heading: "After every doctor visit",
        points: [
          "Get a copy of your work status or restrictions before you leave the appointment.",
          "Send it to Laura the same day. Text a photo or hand it in. Laura sets up your modified duty from it.",
          "Tell your foreman your restrictions so they're followed on the job."
        ]
      },
      {
        heading: "While on modified duty",
        points: [
          "Follow your restrictions exactly, at work AND at home. Don't lift more than you're cleared for or do tasks you've been told not to.",
          "If you're asked to do something outside your restrictions, say no and call Laura.",
          "Go to every appointment and therapy session. Missing them slows your recovery and can affect your claim.",
          "Turning down modified duty that fits your restrictions can affect your workers' comp benefits. Talk to Laura first."
        ]
      },
      {
        heading: "Coming back to full duty",
        points: [
          "You need a full-duty release from the doctor before going back to regular work.",
          "Bring the release to Laura before you start full duty."
        ]
      }
    ],
    questions: [
      { q: "Your doctor says no lifting over 20 pounds, and your foreman asks you to carry bags of concrete. What do you do?",
        a: "Say no, explain your restriction, and call Laura. Your foreman should give you work within your restrictions." },
      { q: "You just left a follow-up appointment with new restrictions. What's next?",
        a: "Send a photo of the work status paperwork to Laura the same day and let your foreman know your restrictions." }
    ],
    statement: "I attended this training. I understand how modified duty works, that I must send my restrictions to HR after every visit, and that I must follow my restrictions."
  },

  /* ---------------------------------------------------------- */
  {
    id: "near-miss",
    title: "Near-Miss & Hazard Reporting",
    frequency: "quarterly",
    audience: "all",
    minutes: 10,
    sections: [
      {
        heading: "Why we're here",
        say: "For every serious injury, there are usually a bunch of close calls before it. Every near miss is a free warning. If we report them, we fix the problem before someone gets hurt.",
        points: [
          "A near miss is anything that could have hurt someone but didn't: a dropped tool that just missed someone, a slip without a fall, a load that shifted.",
          "Everyone is responsible for safety, and all accidents are preventable."
        ]
      },
      {
        heading: "What to report",
        points: [
          "Near misses and close calls.",
          "Hazards: missing guardrails, damaged ladders or tools, open holes, bad wiring, unsafe trenches, slick surfaces.",
          "Unsafe behavior you see, without getting anyone in trouble. The goal is to fix it, not to blame anyone."
        ]
      },
      {
        heading: "How to report",
        points: [
          "Tell your foreman right away.",
          "Foremen: write it up on the Hazard Observation Sheet on the iPad (Field Portal) where your division has one, and fix it or block it off before work continues.",
          "If the hazard is still there, don't work around it. Stop and get it fixed."
        ]
      },
      {
        heading: "Speak up",
        points: [
          "You're required to tell your foreman if you haven't been trained on a task, don't understand it, or don't have the experience or equipment to do it safely.",
          "Nobody will get in trouble for reporting a near miss or a hazard in good faith."
        ]
      }
    ],
    questions: [
      { q: "A board falls off the second floor and lands a few feet from a coworker. Nobody's hurt. Do you report it?",
        a: "Yes. That's a near miss. Tell your foreman so the cause gets fixed before it lands on someone next time." },
      { q: "You're told to use a tool you've never been trained on. What do you do?",
        a: "Tell your foreman before you use it. The handbook requires you to speak up if you don't have the training or experience to do a task safely." }
    ],
    statement: "I attended this training. I understand how to report near misses and hazards, and that I must speak up if I'm not trained or able to do a task safely."
  }

];
