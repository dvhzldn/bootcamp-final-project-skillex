const profiles = [
  {
    id: 1,
    profile_id: { $oid: "62e3f0e6fc13ae3b3e000005" },
    full_name: "Bronson Sprigings",
    preferred_name: "bsprigings0",
    teach_skills: ["English", "Cooking"],
    learn_skills: ["Accounting", "DIY", "IT"],
    bio: "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    avatar_url:
      "https://robohash.org/nequepraesentiumsit.png?size=50x50&set=set1",
  },
  {
    id: 2,
    profile_id: { $oid: "62e3f0e6fc13ae3b3e000006" },
    full_name: "Veronique Saye",
    preferred_name: "vsaye1",
    teach_skills: ["Gardening"],
    learn_skills: ["Cooking"],
    bio: "Praesent lectus.",
    avatar_url: "https://robohash.org/hicsolutamagni.png?size=50x50&set=set1",
  },
  {
    id: 3,
    profile_id: { $oid: "62e3f0e6fc13ae3b3e000007" },
    full_name: "Jan Lovelock",
    preferred_name: "jlovelock2",
    teach_skills: ["DIY"],
    learn_skills: ["IT"],
    bio: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    avatar_url:
      "https://robohash.org/quiainventorererum.png?size=50x50&set=set1",
  },
  {
    id: 4,
    profile_id: { $oid: "62e3f0e6fc13ae3b3e000008" },
    full_name: "Jaclyn McConnachie",
    preferred_name: "jmcconnachie3",
    teach_skills: ["IT"],
    learn_skills: ["Cooking"],
    bio: "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    avatar_url: "https://robohash.org/suntquodomnis.png?size=50x50&set=set1",
  },
  {
    id: 5,
    profile_id: { $oid: "62e3f0e6fc13ae3b3e000009" },
    full_name: "Iver Aleevy",
    preferred_name: "ialeevy4",
    teach_skills: ["English"],
    learn_skills: ["IT"],
    bio: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    avatar_url:
      "https://robohash.org/doloribussolutaofficia.png?size=50x50&set=set1",
  },
  {
    id: 6,
    profile_id: { $oid: "62e3f0e6fc13ae3b3e00000a" },
    full_name: "Jan Tomczykiewicz",
    preferred_name: "jtomczykiewicz5",
    teach_skills: ["Cooking"],
    learn_skills: ["Gardening"],
    bio: "Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    avatar_url: "https://robohash.org/sitrerumipsam.png?size=50x50&set=set1",
  },
  {
    id: 7,
    profile_id: { $oid: "62e3f0e6fc13ae3b3e00000b" },
    full_name: "Karoly Curzey",
    preferred_name: "kcurzey6",
    teach_skills: ["IT"],
    learn_skills: ["Accounting"],
    bio: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    avatar_url:
      "https://robohash.org/cuminventoreprovident.png?size=50x50&set=set1",
  },
  {
    id: 8,
    profile_id: { $oid: "62e3f0e6fc13ae3b3e00000c" },
    full_name: "Madelon Maidlow",
    preferred_name: "mmaidlow7",
    teach_skills: ["Cooking"],
    learn_skills: ["DIY"],
    bio: "Integer a nibh.",
    avatar_url:
      "https://robohash.org/pariaturquiaeaque.png?size=50x50&set=set1",
  },
  {
    id: 9,
    profile_id: { $oid: "62e3f0e6fc13ae3b3e00000d" },
    full_name: "Sebastiano Macquire",
    preferred_name: "smacquire8",
    teach_skills: ["Gardening"],
    learn_skills: ["English"],
    bio: "Nulla mollis molestie lorem.",
    avatar_url:
      "https://robohash.org/temporibusquiipsum.png?size=50x50&set=set1",
  },
  {
    id: 10,
    profile_id: { $oid: "62e3f0e6fc13ae3b3e00000e" },
    full_name: "Dur Margaritelli",
    preferred_name: "dmargaritelli9",
    teach_skills: ["DIY"],
    learn_skills: ["IT"],
    bio: "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    avatar_url: "https://robohash.org/eiusenimeaque.png?size=50x50&set=set1",
  },
  {
    id: 11,
    profile_id: { $oid: "62e3f0e6fc13ae3b3e00000f" },
    full_name: "Ricoriki End",
    preferred_name: "renda",
    teach_skills: ["English"],
    learn_skills: ["Cooking"],
    bio: "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    avatar_url: "https://robohash.org/estdolorumporro.png?size=50x50&set=set1",
  },
  {
    id: 12,
    profile_id: { $oid: "62e3f0e6fc13ae3b3e000010" },
    full_name: "Ransell Casemore",
    preferred_name: "rcasemoreb",
    teach_skills: ["Accounting"],
    learn_skills: ["DIY"],
    bio: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    avatar_url: "https://robohash.org/abducimusmagni.png?size=50x50&set=set1",
  },
];

export default profiles;