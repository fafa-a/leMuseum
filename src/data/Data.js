<<<<<<< HEAD
const data = [
  {
    Painters: [
      {
        id: 1,
        firstName: null,
        lastName: "Banksy",
        profilePic: require("../images/banksy/banksy.jpg"),
        artwork: [
          require("../images/banksy/banksy1.jpg"),
          require("../images/banksy/banksy2.jpg"),
          require("../images/banksy/banksy3.jpg"),
          require("../images/banksy/banksy4.jpg"),
          require("../images/banksy/banksy5.jpg"),
          require("../images/banksy/banksy6.jpg"),
          require("../images/banksy/banksy7.jpg"),
          require("../images/banksy/banksy8.jpg"),
        ],
        description:
          "Banksy is an anonymous England-based street artist, vandal, political activist, and film director, active since the 1990s. His satirical street art and subversive epigrams combine dark humour with graffiti executed in a distinctive stenciling technique.",
      },
      {
        id: 2,
        firstName: "Jean-Michel",
        lastName: "Basquiat",
        profilePic: require("../images/basquiat/basquiat.jpg"),
        artwork: [
          require("../images/basquiat/basquiat1.jpg"),
          require("../images/basquiat/basquiat2.jpg"),
          require("../images/basquiat/basquiat3.jpg"),
          require("../images/basquiat/basquiat4.jpg"),
          require("../images/basquiat/basquiat5.jpg"),
          require("../images/basquiat/basquiat6.jpg"),
        ],
        description:
          "Jean-Michel Basquiat was an American artist. Basquiat first achieved fame as part of SAMO, an informal graffiti duo who wrote enigmatic epigrams in the cultural hotbed of the Lower East Side of Manhattan during the late 1970s, where rap, punk, and street art coalesced into early hip-hop music culture.",
      },
      {
        id: 3,
        firstName: "Shepard",
        lastName: "Fairey",
        profilePic: require("../images/fairey/fairey.jpg"),
        artwork: [
          require("../images/fairey/fairey1.png"),
          require("../images/fairey/fairey2.jpg"),
          require("../images/fairey/fairey3.jpg"),
          require("../images/fairey/fairey4.jpg"),
          require("../images/fairey/fairey5.png"),
          require("../images/fairey/fairey6.jpg"),
          require("../images/fairey/fairey7.jpg"),
          require("../images/fairey/fairey8.jpg"),
        ],
        description:
          "Frank Shepard Fairey is an American contemporary street artist, graphic designer, activist, illustrator, and founder of OBEY Clothing who emerged from the skateboarding scene. He first became known for his 'Andre the Giant Has a Posse' sticker campaign while attending the Rhode Island School of Design.",
      },
    ],
    Sculptors: [
      {
        id: 1,
        firstName: null,
        lastName: "Kaws",
        profilePic: require("../images/kaws/kaws.jpg"),
        artwork: [
          require("../images/kaws/kaws1.jpg"),
          require("../images/kaws/kaws2.jpg"),
          require("../images/kaws/kaws3.jpg"),
        ],
        description:
          "Brian Donnelly, known professionally as Kaws, is an American artist and designer. His work includes repeated use of a cast of figurative characters and motifs, some dating back to the beginning of his career in the 1990s, initially painted in 2D and later realised in 3D.",
      },
      {
        id: 2,
        firstName: "Mark",
        lastName: "Jenkins",
        profilePic: "",
        artwork: [""],
        description:
          "Mark Jenkins is an American artist who makes sculptural street installations. Jenkins' practice of street art is to use the 'street as a stage' where his sculptures interact with the surrounding environment including passersby who unknowingly become actors. His installations often draw the attention of the police.",
      },
    ],
  },
];

export default data;
=======
const data = [
  {
    Painters: [
      {
        id: 1,
        firstName: null,
        lastName: "Banksy",
        profilePic: require("../images/banksy/banksy.jpg"),
        artwork: [
          require("../images/banksy/banksy1.jpg"),
          require("../images/banksy/banksy2.jpg"),
          require("../images/banksy/banksy3.jpg"),
          require("../images/banksy/banksy4.jpg"),
          require("../images/banksy/banksy5.jpg"),
          require("../images/banksy/banksy6.jpg"),
          require("../images/banksy/banksy7.jpg"),
          require("../images/banksy/banksy8.jpg"),
        ],
        description:
          "Banksy is an anonymous England-based street artist, vandal, political activist, and film director, active since the 1990s. His satirical street art and subversive epigrams combine dark humour with graffiti executed in a distinctive stenciling technique.",
        site: "https://www.banksy.co.uk/",
      },
      {
        id: 2,
        firstName: "Jean-Michel",
        lastName: "Basquiat",
        profilePic: require("../images/basquiat/basquiat.jpg"),
        artwork: [
          require("../images/basquiat/basquiat1.jpg"),
          require("../images/basquiat/basquiat2.jpg"),
          require("../images/basquiat/basquiat3.jpg"),
          require("../images/basquiat/basquiat4.jpg"),
          require("../images/basquiat/basquiat5.jpg"),
          require("../images/basquiat/basquiat6.jpg"),
        ],
        description:
          "Jean-Michel Basquiat was an American artist. Basquiat first achieved fame as part of SAMO, an informal graffiti duo who wrote enigmatic epigrams in the cultural hotbed of the Lower East Side of Manhattan during the late 1970s, where rap, punk, and street art coalesced into early hip-hop music culture.",
        site: "http://www.basquiat.com/",
      },
      {
        id: 3,
        firstName: "Shepard",
        lastName: "Fairey",
        profilePic: require("../images/fairey/fairey.jpg"),
        artwork: [
          require("../images/fairey/fairey1.png"),
          require("../images/fairey/fairey2.jpg"),
          require("../images/fairey/fairey3.jpg"),
          require("../images/fairey/fairey4.jpg"),
          require("../images/fairey/fairey5.png"),
          require("../images/fairey/fairey6.jpg"),
          require("../images/fairey/fairey7.jpg"),
          require("../images/fairey/fairey8.jpg"),
        ],
        description:
          "Frank Shepard Fairey is an American contemporary street artist, graphic designer, activist, illustrator, and founder of OBEY Clothing who emerged from the skateboarding scene. He first became known for his 'Andre the Giant Has a Posse' sticker campaign while attending the Rhode Island School of Design.",
        site: "https://obeygiant.com/",
      },
    ],
    Sculptors: [
      {
        id: 1,
        firstName: null,
        lastName: "Kaws",
        profilePic: require("../images/kaws/kaws.jpg"),
        artwork: [
          require("../images/kaws/kaws1.jpg"),
          require("../images/kaws/kaws2.jpg"),
          require("../images/kaws/kaws3.jpg"),
          require("../images/kaws/kaws4.jpg"),
          require("../images/kaws/kaws5.jpg"),
          require("../images/kaws/kaws6.jpg"),
          require("../images/kaws/kaws7.jpg"),
        ],
        description:
          "Brian Donnelly, known professionally as Kaws, is an American artist and designer. His work includes repeated use of a cast of figurative characters and motifs, some dating back to the beginning of his career in the 1990s, initially painted in 2D and later realised in 3D.",
        site: "https://kawsone.com/",
      },
      {
        id: 2,
        firstName: "Mark",
        lastName: "Jenkins",
        profilePic: require("../images/jenkins/Jenkins.jpg"),
        artwork: [
          require("../images/jenkins/Jenkins1.jpg"),
          require("../images/jenkins/Jenkins2.jpg"),
          require("../images/jenkins/Jenkins3.jpg"),
          require("../images/jenkins/Jenkins4.jpg"),
          require("../images/jenkins/Jenkins5.jpg"),
          require("../images/jenkins/Jenkins6.jpg"),
          require("../images/jenkins/Jenkins7.jpg"),
        ],
        description:
          "Mark Jenkins is an American artist who makes sculptural street installations. Jenkins' practice of street art is to use the 'street as a stage' where his sculptures interact with the surrounding environment including passersby who unknowingly become actors. His installations often draw the attention of the police.",
        site: "http://xmarkjenkinsx.com/",
      },
      {
        id: 3,
        firstName: "Jeff",
        lastName: "Koons",
        profilePic: require("../images/Koons/Koons.jpg"),
        artwork: [
          require("../images/Koons/Koons1.jpg"),
          require("../images/Koons/Koons2.jpg"),
          require("../images/Koons/Koons3.jpg"),
          require("../images/Koons/Koons4.jpg"),
          require("../images/Koons/Koons5.jpg"),
          require("../images/Koons/Koons6.jpg"),
          require("../images/Koons/Koons7.jpg"),
        ],
        description:
          "Jeffrey L. Koons is an American artist recognized for his work dealing with popular culture and his sculptures depicting everyday objects, including balloon animals – produced in stainless steel with mirror-finish surfaces. He lives and works in both New York City and his hometown of York, Pennsylvania.",
        site: "http://www.jeffkoons.com/",
      },
    ],
  },
];

export default data;
>>>>>>> 0237a05263eca55abce57b9188647b21ca53e4ca
