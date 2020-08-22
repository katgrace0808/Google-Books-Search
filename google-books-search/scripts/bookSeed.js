const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
  );
  
  const bookSeed = [
      {
          title: "Jane Eyre",
          authors: "Charlotte Bronte",
          description: "In early nineteenth-century England, an orphaned young woman accepts employment as a governess at Thornfield Hall, a country estate owned by the mysteriously remote Mr. Rochester.",
          image: "https://www.google.com/books/edition/Jane_Eyre/9dq7AQAAQBAJ?hl=en&gbpv=1&dq=jane+eyre&printsec=frontcover",
          link: "https://www.google.com/books/edition/Jane_Eyre/9dq7AQAAQBAJ?hl=en&gbpv=0"
      },
      {
        title: "Wuthering Heights",
        authors: "Emily Bronte",
        description: "Published in 1845, Emily Bronte’s gothic novel set on the windy moors of Yorkshire is the story of the doomed love between Catherine Earnshaw and her father’s adopted son, Heathcliff. The book was initially poorly received by many critics who found its dark, tragic story needlessly harsh and disturbing. That opinion has not endured, and the only novel Emily Bronte published is now considered to be one of the great classics of English literature.",
        image: "https://www.google.com/books/edition/Wuthering_Heights/KhMYAAAAYAAJ?hl=en&gbpv=1&dq=wuthering+heights&printsec=frontcover",
        link: "https://www.google.com/books/edition/Wuthering_Heights/KhMYAAAAYAAJ?hl=en&gbpv=0"
      },
      {
        title: "Pride and Prejudice",
        authors: "Jane Austen",
        description: "Austen’s most celebrated novel tells the story of Elizabeth Bennet, a bright, lively young woman with four sisters, and a mother determined to marry them to wealthy men. At a party near the Bennets’ home in the English countryside, Elizabeth meets the wealthy, proud Fitzwilliam Darcy. Elizabeth initially finds Darcy haughty and intolerable, but circumstances continue to unite the pair. Mr. Darcy finds himself captivated by Elizabeth’s wit and candor, while her reservations about his character slowly vanish. The story is as much a social critique as it is a love story, and the prose crackles with Austen’s wry wit.",
        image: "https://www.google.com/books/edition/Pride_and_Prejudice/s1gVAAAAYAAJ?hl=en&gbpv=1&dq=pride+and+prejudice&printsec=frontcover",
        link: "https://www.google.com/books/edition/Pride_and_Prejudice/s1gVAAAAYAAJ?hl=en&gbpv=0"
      },
      {
        title: "To Kill a Mockingbird",
        authors: "Harper Lee",
        description: "`Shoot all the bluejays you want, if you can hit 'em, but remember it's a sin to kill a mockingbird.` A lawyer's advice to his children as he defends the real mockingbird of Harper Lee's classic novel--a black man charged with the rape of a white girl. Through the young eyes of Scout and Jem Finch, Harper Lee explores with rich humor and unswerving honesty the irrationality of adult attitudes toward race and class in the Deep South of the 1930s. The conscience of a town steeped in prejudice, violence, and hypocrisy is pricked by the stamina and quiet heroism of one man's struggle for justice--but the weight of history will only tolerate so much.",
        image: "https://www.google.com/books/edition/To_Kill_a_Mockingbird/PGR2AwAAQBAJ?hl=en&gbpv=1&dq=to+kill+a+mockingbird&printsec=frontcover",
        link: "https://www.google.com/books/edition/To_Kill_a_Mockingbird/PGR2AwAAQBAJ?hl=en&gbpv=0"
      },
      {
        title: "The Catcher in the Rye",
        authors: "J.D. Salinger",
        description: "`If you really want to hear about it, the first thing you'll probably want to know is where I was born, and what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don't feel like going into it, if you want to know the truth.` The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caufield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days.",
        image: "https://www.google.com/books/edition/The_Catcher_in_the_Rye/FqSiDwAAQBAJ?hl=en&gbpv=1&dq=the+catcher+in+the+rye&printsec=frontcover",
        link: "https://www.google.com/books/edition/The_Catcher_in_the_Rye/FqSiDwAAQBAJ?hl=en&gbpv=0"
      },
      {
        title: "1984",
        authors: "George Orwell",
        description: "In 1984, London is a grim city in the totalitarian state of Oceania where Big Brother is always watching you and the Thought Police can practically read your mind. Winston Smith is a man in grave danger for the simple reason that his memory still functions. Drawn into a forbidden love affair, Winston finds the courage to join a secret revolutionary organization called The Brotherhood, dedicated to the destruction of the Party. Together with his beloved Julia, he hazards his life in a deadly match against the powers that be.",
        image: "https://www.google.com/books/edition/1984/kotPYEqx7kMC?hl=en&gbpv=1&dq=1984&printsec=frontcover",
        link: "https://www.google.com/books/edition/1984/kotPYEqx7kMC?hl=en&gbpv=0"
      },
      {
        title: "Of Mice and Men",
        authors: "John Steinbeck",
        description: "Over seventy-five years since its first publication, Steinbeck's tale of commitment, loneliness, hope, and loss remains one of America's most widely read and taught novels. An unlikely pair, George and Lennie, two migrant workers in California during the Great Depression, grasp for their American Dream. They hustle work when they can, living a hand-to-mouth existence. For George and Lennie have a plan: to own an acre of land and a shack they can call their own. When they land jobs on a ranch in the Salinas Valley, the fulfillment of their dream seems to be within their grasp. But even George cannot guard Lennie from the provocations, nor predict the consequences of Lennie's unswerving obedience to the things George taught him.",
        image: "https://www.google.com/books/edition/Of_Mice_and_Men/nE_Si_bv-W4C?hl=en&gbpv=1&dq=of+mice+and+men&printsec=frontcover",
        link: "https://www.google.com/books/edition/Of_Mice_and_Men/nE_Si_bv-W4C?hl=en&gbpv=0"
      },
      {
        title: "The Grapes of Wrath",
        authors: "John Steinbeck",
        description: "First published in 1939, Steinbeck's Pulitzer Prize-winning epic of the Great Depression chronicles the Dust Bowl migration of the 1930s and tells the story of one Oklahoma farm family, the Joads--driven from their homestead and forced to travel west to the promised land of California. Out of their trials and their repeated collisions against the hard realities of an America divided into Haves and Have-Nots evolves a drama that is intensely human yet majestic in its scale and moral vision, elemental yet plainspoken, tragic but ultimately stirring in its human dignity. A portrait of the conflict between the powerful and the powerless, of one man's fierce reaction to injustice, and of one woman's stoical strength, the novel captures the horrors of the Great Depression and probes into the very nature of equality and justice in America. At once a naturalistic epic, captivity narrative, road novel, and transcendental gospel, Steinbeck's powerful landmark novel is perhaps the most American of American Classics.",
        image: "https://www.google.com/books/edition/The_Grapes_of_Wrath/bhJgd3hGdxQC?hl=en&gbpv=1&dq=the+grapes+of+wrath&printsec=frontcover",
        link: "https://www.google.com/books/edition/The_Grapes_of_Wrath/bhJgd3hGdxQC?hl=en&gbpv=0"
      },
      {
        title: "Invisible Man",
        authors: "Ralph Ellison",
        description: "Invisible Man is a milestone in American literature, a book that has continued to engage readers since its appearance in 1952. A first novel by an unknown writer, it remained on the bestseller list for sixteen weeks, won the National Book Award for fiction, and established Ralph Ellison as one of the key writers of the century. The nameless narrator of the novel describes growing up in a black community in the South, attending a Negro college from which he is expelled, moving to New York and becoming the chief spokesman of the Harlem branch of `the Brotherhood,` and retreating amid violence and confusion to the basement lair of the Invisible Man he imagines himself to be.",
        image: "https://www.google.com/books/edition/Invisible_Man/iSrI-BQqFf0C?hl=en&gbpv=1&dq=invisible+man&printsec=frontcover",
        link: "https://www.google.com/books/edition/Invisible_Man/iSrI-BQqFf0C?hl=en&gbpv=0"
      },
      {
        title: "Native Son",
        authors: "Richard Wright",
        description: "Right from the start, Bigger Thomas had been headed for jail. It could have been for assault or petty larceny; by chance, it was for murder and rape. Native Son tells the story of this young black man caught in a downward spiral after he kills a young white woman in a brief moment of panic. Set in Chicago in the 1930s, Richard Wright's novel is just as powerful today as when it was written -- in its reflection of poverty and hopelessness, and what it means to be black in America.",
        image: "https://www.google.com/books/edition/Native_Son/IE5yW9MTML4C?hl=en&gbpv=1&dq=native+son&printsec=frontcover",
        link: "https://www.google.com/books/edition/Native_Son/IE5yW9MTML4C?hl=en&gbpv=0"
      },
      {
        title: "The Color Purple",
        authors: "Alice Walker",
        description: "Celie is a poor black woman whose letters tell the story of 20 years of her life, beginning at age 14 when she is being abused and raped by her father and attempting to protect her sister from the same fate, and continuing over the course of her marriage to `Mister,` a brutal man who terrorizes her. Celie eventually learns that her abusive husband has been keeping her sister's letters from her and the rage she feels, combined with an example of love and independence provided by her close friend Shug, pushes her finally toward an awakening of her creative and loving self.",
        image: "https://www.google.com/books/edition/The_Color_Purple/CX6m7scQ4wcC?hl=en&gbpv=1&dq=the+color+purple&printsec=frontcover",
        link: "https://www.google.com/books/edition/The_Color_Purple/CX6m7scQ4wcC?hl=en&gbpv=0"
      },
      {
        title: "My Beloved World",
        authors: "Sonia Sotomayer",
        description: "The first Hispanic and third woman appointed to the United States Supreme Court, Sonia Sotomayor has become an instant American icon. Now, with a candor and intimacy never undertaken by a sitting Justice, she recounts her life from a Bronx housing project to the federal bench, a journey that offers an inspiring testament to her own extraordinary determination and the power of believing in oneself. Here is the story of a precarious childhood, with an alcoholic father (who would die when she was nine) and a devoted but overburdened mother, and of the refuge a little girl took from the turmoil at home with her passionately spirited paternal grandmother. But it was when she was diagnosed with juvenile diabetes that the precocious Sonia recognized she must ultimately depend on herself. She would learn to give herself the insulin shots she needed to survive and soon imagined a path to a different life. With only television characters for her professional role models, and little understanding of what was involved, she determined to become a lawyer, a dream that would sustain her on an unlikely course, from valedictorian of her high school class to the highest honors at Princeton, Yale Law School, the New York County District Attorney's office, private practice, and appointment to the Federal District Court before the age of forty. Along the way we see how she was shaped by her invaluable mentors, a failed marriage, and the modern version of extended family she has created from cherished friends and their children. Through her still-astonished eyes, America's infinite possibilities are envisioned anew in this warm and honest book.",
        image: "https://www.google.com/books/edition/My_Beloved_World/a8pvDwAAQBAJ?hl=en&gbpv=1&dq=my+beloved+world&pg=PP3&printsec=frontcover",
        link: "https://www.google.com/books/edition/My_Beloved_World/a8pvDwAAQBAJ?hl=en&gbpv=0"
      },
      {
        title: "Born a Crime",
        authors: "Trevor Noah",
        description: "Born a Crime is the story of a mischievous young boy who grows into a restless young man as he struggles to find himself in a world where he was never supposed to exist. It is also the story of that young man’s relationship with his fearless, rebellious, and fervently religious mother—his teammate, a woman determined to save her son from the cycle of poverty, violence, and abuse that would ultimately threaten her own life.",
        image: "https://www.google.com/books/edition/Born_a_Crime/N97UCwAAQBAJ?hl=en&gbpv=1&dq=born+a+crime&printsec=frontcover",
        link: "https://www.google.com/books/edition/Born_a_Crime/N97UCwAAQBAJ?hl=en&gbpv=0"
      },

  ]

  db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
