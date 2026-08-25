const RAW_PRONOUN_QUESTIONS = [
  ["I am a student. ___ like English.", "I", "me", "her", "『私は』を表す主格は I です。"],
  ["My name is Ken. ___ am thirteen.", "I", "me", "them", "話し手自身を主語にするときは I です。"],
  ["I live in Kyoto. ___ go to school by bus.", "I", "my", "him", "文の主語『私は』には I を使います。"],
  ["I have a dog. ___ play with it every day.", "I", "mine", "her", "動作の主語『私は』は I です。"],
  ["I am in Class 1. ___ study math every morning.", "I", "me", "their", "主語の形は I です。"],

  ["Ken is my friend. ___ plays soccer.", "He", "him", "her", "Ken を受ける男性の主格は He です。"],
  ["My father is a teacher. ___ teaches science.", "He", "his", "them", "father を受ける主格は He です。"],
  ["Tom is thirteen. ___ likes music.", "He", "him", "our", "Tom を主語として受けるときは He です。"],
  ["Mr. Sato is kind. ___ helps us.", "He", "his", "hers", "男性一人を主語として受けるときは He です。"],
  ["My brother has a bike. ___ rides it to school.", "He", "him", "their", "brother を受ける主格は He です。"],

  ["Yuki is my sister. ___ likes tennis.", "She", "her", "him", "Yuki を女性として受ける主格は She です。"],
  ["My mother is busy. ___ works at a hospital.", "She", "hers", "them", "mother を受ける主格は She です。"],
  ["Ms. Tanaka is our teacher. ___ teaches English.", "She", "her", "mine", "女性一人を主語として受けるときは She です。"],
  ["Aya has a cat. ___ loves animals.", "She", "her", "our", "Aya を受ける主格は She です。"],
  ["My grandmother lives in Nara. ___ is very kind.", "She", "hers", "him", "grandmother を受ける主格は She です。"],

  ["Ken and I are friends. ___ study together.", "We", "us", "her", "『私たちは』を表す主格は We です。"],
  ["My sister and I like music. ___ play the piano.", "We", "our", "him", "自分を含む複数の主格は We です。"],
  ["My family and I live in Osaka. ___ love the city.", "We", "us", "hers", "自分を含む複数を受ける主格は We です。"],
  ["Tom and I are in Class 1. ___ are classmates.", "We", "ours", "her", "Tom と自分をまとめる主格は We です。"],
  ["My friends and I walk to school. ___ leave at seven.", "We", "our", "him", "自分を含む複数の主格は We です。"],

  ["Ken and Yuki are classmates. ___ study English.", "They", "them", "her", "複数の人を受ける主格は They です。"],
  ["My parents are at home. ___ are cooking dinner.", "They", "their", "mine", "parents を受ける主格は They です。"],
  ["Those boys play baseball. ___ practice every day.", "They", "them", "our", "複数の boys を受ける主格は They です。"],
  ["My dogs are cute. ___ sleep under the table.", "They", "their", "him", "複数の dogs を受ける主格は They です。"],
  ["These books are new. ___ are interesting.", "They", "them", "hers", "複数の物を受ける主格は They です。"],

  ["I have a bike. ___ bike is red.", "my", "mine", "her", "名詞 bike の前で『私の』は my です。"],
  ["I like English. ___ English teacher is kind.", "my", "me", "their", "名詞の前の『私の』は my です。"],
  ["I have a brother. ___ brother is twelve.", "my", "mine", "his", "brother の前には所有格 my を使います。"],
  ["I am in Class 1. ___ classroom is on the second floor.", "my", "me", "her", "classroom の前の『私の』は my です。"],
  ["I have a dog. ___ dog is very small.", "my", "mine", "our", "dog の前で『私の』は my です。"],

  ["You have a pen. Is this ___ pen?", "your", "yours", "her", "名詞 pen の前で『あなたの』は your です。"],
  ["You like music. ___ favorite song is nice.", "your", "you", "their", "名詞の前の『あなたの』は your です。"],
  ["You have a sister. What is ___ sister's name?", "your", "yours", "his", "sister の前には your を使います。"],
  ["You are in Class 2. Where is ___ classroom?", "your", "you", "our", "classroom の前の『あなたの』は your です。"],
  ["You have a dog. ___ dog is cute.", "your", "yours", "her", "dog の前で『あなたの』は your です。"],

  ["Ken has a bike. ___ bike is new.", "his", "him", "her", "Ken の所有を表し、名詞の前では his です。"],
  ["My father has a car. ___ car is blue.", "his", "he", "their", "father の所有を表す所有格は his です。"],
  ["Tom likes baseball. ___ favorite team is famous.", "his", "him", "our", "Tom の favorite team なので his です。"],
  ["My brother has a room. ___ room is small.", "his", "he", "her", "brother の所有を表す所有格は his です。"],
  ["Mr. Sato has a dog. ___ dog is big.", "his", "him", "mine", "Mr. Sato の所有を表す所有格は his です。"],

  ["Yuki has a cat. ___ cat is white.", "her", "hers", "his", "Yuki の所有を表し、名詞の前では her です。"],
  ["My mother has a bag. ___ bag is black.", "her", "she", "their", "mother の所有を表す所有格は her です。"],
  ["Aya likes music. ___ favorite singer is famous.", "her", "hers", "our", "Aya の favorite singer なので her です。"],
  ["My sister has a room. ___ room is clean.", "her", "she", "his", "sister の所有を表す所有格は her です。"],
  ["Ms. Tanaka has a book. ___ book is on the desk.", "her", "hers", "mine", "Ms. Tanaka の所有を表す所有格は her です。"],

  ["We have a classroom. ___ classroom is large.", "our", "ours", "her", "名詞の前で『私たちの』は our です。"],
  ["We like our school. ___ school is near the station.", "our", "us", "his", "school の前の『私たちの』は our です。"],
  ["They have two dogs. ___ dogs are cute.", "their", "theirs", "my", "名詞の前で『彼らの』は their です。"],
  ["My parents have a car. ___ car is white.", "their", "them", "her", "parents の所有を表す所有格は their です。"],
  ["Ken and Yuki have a room. ___ room is clean.", "their", "theirs", "our", "Ken と Yuki の所有を表す所有格は their です。"],

  ["Ken knows me. He often calls ___.", "me", "I", "her", "動詞 calls の目的語『私を』は me です。"],
  ["My teacher helps ___.", "me", "my", "them", "help の目的語『私を』には me を使います。"],
  ["Please listen to ___.", "me", "mine", "his", "前置詞 to の後の『私』は me です。"],
  ["Can you see ___?", "me", "I", "her", "see の目的語『私を』は me です。"],
  ["My mother is waiting for ___.", "me", "my", "them", "for の後の『私』は me です。"],

  ["I know Ken. I often talk with ___.", "him", "he", "her", "Ken を目的語として受けるときは him です。"],
  ["This gift is for my father. It is for ___.", "him", "his", "them", "for の後で father を受ける形は him です。"],
  ["We like Tom. We play soccer with ___.", "him", "he", "her", "with の後で Tom を受ける形は him です。"],
  ["Please call my brother. Please call ___.", "him", "his", "us", "call の目的語で brother を受ける形は him です。"],
  ["I can see Mr. Sato. I can see ___.", "him", "he", "them", "see の目的語で男性一人を受ける形は him です。"],

  ["I know Yuki. I often talk with ___.", "her", "she", "him", "Yuki を目的語として受けるときは her です。"],
  ["This gift is for my mother. It is for ___.", "her", "hers", "them", "for の後で mother を受ける形は her です。"],
  ["We like Aya. We play tennis with ___.", "her", "she", "him", "with の後で Aya を受ける形は her です。"],
  ["Please call my sister. Please call ___.", "her", "hers", "us", "call の目的語で sister を受ける形は her です。"],
  ["I can see Ms. Tanaka. I can see ___.", "her", "she", "them", "see の目的語で女性一人を受ける形は her です。"],

  ["Our teacher helps Ken and me. She helps ___.", "us", "we", "her", "自分を含む複数の目的格は us です。"],
  ["This room is for my family and me. It is for ___.", "us", "our", "him", "for の後の『私たち』は us です。"],
  ["Please come with my brother and me. Come with ___.", "us", "we", "her", "with の後の『私たち』は us です。"],
  ["Mr. Sato teaches my friends and me. He teaches ___.", "us", "ours", "him", "teach の目的語『私たちを』は us です。"],
  ["Can you help my sister and me? Can you help ___?", "us", "our", "her", "help の目的語『私たちを』は us です。"],

  ["I know Ken and Yuki. I often talk with ___.", "them", "they", "her", "複数の人を目的語として受けるときは them です。"],
  ["These gifts are for my parents. They are for ___.", "them", "their", "me", "for の後で parents を受ける形は them です。"],
  ["We like those boys. We play baseball with ___.", "them", "they", "her", "with の後で複数の人を受ける形は them です。"],
  ["Please call my friends. Please call ___.", "them", "their", "him", "call の目的語で friends を受ける形は them です。"],
  ["I can see the dogs. I can see ___.", "them", "they", "her", "複数のものを目的語として受けるときは them です。"],

  ["This book belongs to me. It is ___.", "mine", "my", "hers", "名詞を繰り返さず『私のもの』は mine です。"],
  ["That bike is my bike. It is ___.", "mine", "me", "his", "『私のもの』を表す所有代名詞は mine です。"],
  ["This pen is my pen. It is ___.", "mine", "my", "theirs", "名詞なしで『私のもの』は mine です。"],
  ["The red bag belongs to me. It is ___.", "mine", "I", "hers", "belongs to me を言い換えると mine です。"],
  ["That desk is my desk. It is ___.", "mine", "me", "ours", "名詞を省いた『私のもの』は mine です。"],

  ["This book belongs to you. It is ___.", "yours", "your", "hers", "『あなたのもの』を表す所有代名詞は yours です。"],
  ["That bike is your bike. It is ___.", "yours", "you", "his", "名詞なしで『あなたのもの』は yours です。"],
  ["This pen is your pen. It is ___.", "yours", "your", "theirs", "『あなたのもの』は yours です。"],
  ["The blue bag belongs to you. It is ___.", "yours", "you", "mine", "belongs to you を言い換えると yours です。"],
  ["That desk is your desk. It is ___.", "yours", "your", "ours", "名詞を省いた『あなたのもの』は yours です。"],

  ["This book belongs to Yuki. It is ___.", "hers", "her", "his", "Yuki のものを名詞なしで表すと hers です。"],
  ["That bike is my sister's bike. It is ___.", "hers", "she", "mine", "『彼女のもの』を表す所有代名詞は hers です。"],
  ["This pen is Aya's pen. It is ___.", "hers", "her", "theirs", "Aya のものを表す所有代名詞は hers です。"],
  ["The red bag belongs to my mother. It is ___.", "hers", "she", "ours", "mother のものを名詞なしで表すと hers です。"],
  ["That desk is Ms. Tanaka's desk. It is ___.", "hers", "her", "mine", "Ms. Tanaka のものを表す所有代名詞は hers です。"],

  ["This classroom belongs to us. It is ___.", "ours", "our", "hers", "『私たちのもの』を表す所有代名詞は ours です。"],
  ["That table is our table. It is ___.", "ours", "us", "his", "名詞なしで『私たちのもの』は ours です。"],
  ["This room is our room. It is ___.", "ours", "our", "theirs", "『私たちのもの』は ours です。"],
  ["The big car belongs to my family and me. It is ___.", "ours", "we", "hers", "自分を含む複数の所有代名詞は ours です。"],
  ["Those seats are our seats. They are ___.", "ours", "us", "mine", "名詞を省いた『私たちのもの』は ours です。"],

  ["This classroom belongs to them. It is ___.", "theirs", "their", "hers", "『彼らのもの』を表す所有代名詞は theirs です。"],
  ["That table is their table. It is ___.", "theirs", "them", "mine", "名詞なしで『彼らのもの』は theirs です。"],
  ["This room is their room. It is ___.", "theirs", "their", "ours", "『彼らのもの』は theirs です。"],
  ["The bikes belong to Ken and Yuki. They are ___.", "theirs", "they", "hers", "Ken と Yuki のものを表す所有代名詞は theirs です。"],
  ["Those seats are my parents' seats. They are ___.", "theirs", "them", "mine", "parents のものを名詞なしで表すと theirs です。"]
];

const CHOICE_ORDERS = [
  [0, 1, 2],
  [1, 2, 0],
  [2, 0, 1],
  [0, 2, 1],
  [1, 0, 2],
  [2, 1, 0]
];

window.RANKING_QUESTIONS = RAW_PRONOUN_QUESTIONS.map(
  ([prompt, correct, normalWrong, absoluteWrong, explanation], index) => {
    const sourceChoices = [correct, normalWrong, absoluteWrong];
    const order = CHOICE_ORDERS[index % CHOICE_ORDERS.length];
    const choices = order.map((choiceIndex) => sourceChoices[choiceIndex]);

    return {
      prompt,
      choices,
      answer: choices.indexOf(correct),
      absoluteWrong: choices.indexOf(absoluteWrong),
      explanation
    };
  }
);

if (window.RANKING_QUESTIONS.length !== 100) {
  throw new Error(`Personal pronoun question pool must contain 100 questions; got ${window.RANKING_QUESTIONS.length}.`);
}
