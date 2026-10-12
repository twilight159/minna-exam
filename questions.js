// Minna no Nihongo I — Lessons 1–8 exam (40 questions).
// Answers are NOT stored here; they live only in the Google Apps Script, so students
// can't find them in the page source.
// Furigana markup: {漢字|かんじ} renders as <ruby>.

window.EXAM = {
  title: "Minna no Nihongo I — Lessons 1–8 Exam",
  minutes: 60,
  parts: [
    { id: "A", title: "Part A — Lessons 1–4", note: "Choose the ONE best answer." },
    { id: "B", title: "Part B — Lessons 5–8", note: "Choose the ONE best answer." },
    { id: "C", title: "Part C — Make a Sentence", note: "Tap the four parts in the correct order to make one sentence. Tap Reset to start again." }
  ],
  questions: [
    // ---------- Part A ----------
    { n: 1, part: "A", lesson: 1, q: "わたし ＿＿＿ マイク・ミラーです。", romaji: "watashi ___ Maiku Miraa desu.",
      options: [["を","o"],["は","wa"],["へ","e"],["で","de"]] },
    { n: 2, part: "A", lesson: 1, q: "サントスさんは {学生|がくせい} ＿＿＿。", romaji: "Santosu-san wa gakusei ___.", hint: "Mr. Santos is not a student.",
      options: [["です","desu"],["ですか","desu ka"],["ません","masen"],["じゃ ありません","ja arimasen"]] },
    { n: 3, part: "A", lesson: 1, q: "ミラーさんは {会社員|かいしゃいん}です。グプタさん ＿＿＿ {会社員|かいしゃいん}です。", romaji: "Miraa-san wa kaishain desu. Guputa-san ___ kaishain desu.",
      options: [["も","mo"],["は","wa"],["の","no"],["か","ka"]] },
    { n: 4, part: "A", lesson: 1, q: "「なんさい」の ていねいな {言|い}い{方|かた}は どれですか。", romaji: "\"nansai\" no teinei na iikata wa dore desu ka.", hint: "Which is the polite way to say \"nansai\" (how old)?",
      options: [["いくら","ikura"],["どなた","donata"],["おいくつ","oikutsu"],["なんがい","nangai"]] },
    { n: 5, part: "A", lesson: 2, q: "Which word refers to a thing near the LISTENER?", romaji: "",
      options: [["これ","kore"],["それ","sore"],["あれ","are"],["どれ","dore"]] },
    { n: 6, part: "A", lesson: 2, q: "それは テレホンカードですか。…いいえ、＿＿＿。", romaji: "Sore wa terehon kaado desu ka. … Iie, ___.",
      options: [["そうです","sou desu"],["そうですか","sou desu ka"],["どうぞ","douzo"],["そうじゃ ありません","sou ja arimasen"]] },
    { n: 7, part: "A", lesson: 2, q: "これは「9」ですか、「7」ですか。…＿＿＿", romaji: "Kore wa \"kyuu\" desu ka, \"nana\" desu ka. … ___",
      options: [["はい、そうです。","hai, sou desu"],["「9」です。","kyuu desu"],["いいえ、{違|ちが}います。","iie, chigaimasu"],["はい、「9」です。","hai, kyuu desu"]] },
    { n: 8, part: "A", lesson: 2, q: "あれは ＿＿＿ かばんですか。…{佐藤|さとう}さんのです。", romaji: "Are wa ___ kaban desu ka. … Satou-san no desu.",
      options: [["だれの","dare no"],["なんの","nan no"],["どこの","doko no"],["どれの","dore no"]] },
    { n: 9, part: "A", lesson: 3, q: "お{手洗|てあら}いは ＿＿＿ ですか。…あそこです。", romaji: "Otearai wa ___ desu ka. … Asoko desu.",
      options: [["だれ","dare"],["なん","nan"],["どこ","doko"],["いくら","ikura"]] },
    { n: 10, part: "A", lesson: 3, q: "「どこ」の ていねいな {言|い}い{方|かた}は どれですか。", romaji: "\"doko\" no teinei na iikata wa dore desu ka.", hint: "Which is the polite way to say \"doko\" (where)?",
      options: [["どちら","dochira"],["あちら","achira"],["どれ","dore"],["どなた","donata"]] },
    { n: 11, part: "A", lesson: 3, q: "この {時計|とけい}は ＿＿＿ ですか。…18,600{円|えん}です。", romaji: "Kono tokei wa ___ desu ka. … ichiman hassen roppyaku en desu.",
      options: [["なんがい","nangai"],["どこ","doko"],["なんさい","nansai"],["いくら","ikura"]] },
    { n: 12, part: "A", lesson: 3, q: "これは どこの コンピューターですか。…＿＿＿", romaji: "Kore wa doko no konpyuutaa desu ka. … ___",
      options: [["わたしのです。","watashi no desu"],["{日本|にほん}の コンピューターです。","Nihon no konpyuutaa desu"],["あそこです。","asoko desu"],["2{階|かい}です。","nikai desu"]] },
    { n: 13, part: "A", lesson: 4, q: "{今|いま} 7{時|じ} ＿＿＿ です。", romaji: "Ima shichi-ji ___ desu.", hint: "It is 7:30.",
      options: [["ふん","fun"],["ごろ","goro"],["はん","han"],["まで","made"]] },
    { n: 14, part: "A", lesson: 4, q: "きのう {勉強|べんきょう}しましたか。…いいえ、＿＿＿。", romaji: "Kinou benkyou shimashita ka. … Iie, ___.",
      options: [["{勉強|べんきょう}しません","benkyou shimasen"],["そうじゃ ありません","sou ja arimasen"],["{勉強|べんきょう}しました","benkyou shimashita"],["{勉強|べんきょう}しませんでした","benkyou shimasen deshita"]] },
    { n: 15, part: "A", lesson: 4, q: "「4分」の {読|よ}み{方|かた}は どれですか。", romaji: "\"4分\" no yomikata wa dore desu ka.", hint: "How do you read 4分 (4 minutes)?",
      options: [["よんぷん","yonpun"],["よんふん","yonfun"],["しふん","shifun"],["よっぷん","yoppun"]] },

    // ---------- Part B ----------
    { n: 16, part: "B", lesson: 5, q: "{京都|きょうと} ＿＿＿ {行|い}きます。", romaji: "Kyouto ___ ikimasu.",
      options: [["を","o"],["で","de"],["へ","e"],["の","no"]] },
    { n: 17, part: "B", lesson: 5, q: "{日曜日|にちようび} どこ ＿＿＿ {行|い}きませんでした。", romaji: "Nichiyoubi doko ___ ikimasen deshita.",
      options: [["でも","demo"],["へも","e mo"],["にも","ni mo"],["とも","to mo"]] },
    { n: 18, part: "B", lesson: 5, q: "「はつか」は {何日|なんにち}ですか。", romaji: "\"Hatsuka\" wa nan-nichi desu ka.", hint: "Which date is \"hatsuka\"?",
      options: [["8日",""],["2日",""],["20日",""],["10日",""]] },
    { n: 19, part: "B", lesson: 6, q: "ジュース ＿＿＿ {飲|の}みます。", romaji: "Juusu ___ nomimasu.",
      options: [["を","o"],["で","de"],["に","ni"],["へ","e"]] },
    { n: 20, part: "B", lesson: 6, q: "{駅|えき} ＿＿＿ {新聞|しんぶん}を {買|か}います。", romaji: "Eki ___ shinbun o kaimasu.",
      options: [["に","ni"],["を","o"],["へ","e"],["で","de"]] },
    { n: 21, part: "B", lesson: 6, q: "ちょっと {休|やす}み＿＿＿。", romaji: "Chotto yasumi___.", hint: "Let's take a short break.",
      options: [["ませんか","masen ka"],["ます","masu"],["ましょう","mashou"],["ました","mashita"]] },
    { n: 22, part: "B", lesson: 6, q: "けさ {何|なに}も ＿＿＿。", romaji: "Kesa nani mo ___.",
      options: [["{食|た}べました","tabemashita"],["{食|た}べましょう","tabemashou"],["{食|た}べます","tabemasu"],["{食|た}べませんでした","tabemasen deshita"]] },
    { n: 23, part: "B", lesson: 7, q: "{山田|やまだ}さんは {木村|きむら}さん ＿＿＿ {花|はな}を あげました。", romaji: "Yamada-san wa Kimura-san ___ hana o agemashita.",
      options: [["に","ni"],["を","o"],["で","de"],["が","ga"]] },
    { n: 24, part: "B", lesson: 7, q: "「ありがとう」は {英語|えいご} ＿＿＿ {何|なん}ですか。", romaji: "\"Arigatou\" wa Eigo ___ nan desu ka.",
      options: [["に","ni"],["を","o"],["の","no"],["で","de"]] },
    { n: 25, part: "B", lesson: 7, q: "もう {荷物|にもつ}を {送|おく}りましたか。…いいえ、＿＿＿。", romaji: "Mou nimotsu o okurimashita ka. … Iie, ___.",
      options: [["{送|おく}りませんでした","okurimasen deshita"],["もうです","mou desu"],["まだです","mada desu"],["{送|おく}りません","okurimasen"]] },
    { n: 26, part: "B", lesson: 7, q: "Which word means \"(my own) mother\" when talking about your family?", romaji: "",
      options: [["おかあさん","okaasan"],["はは","haha"],["ちち","chichi"],["おとうさん","otousan"]] },
    { n: 27, part: "B", lesson: 8, q: "「いいです」の {否定形|ひていけい}は どれですか。", romaji: "\"Ii desu\" no hiteikei wa dore desu ka.", hint: "What is the negative of \"ii desu\" (it is good)?",
      options: [["いくないです","ikunai desu"],["いいじゃ ありません","ii ja arimasen"],["よいくないです","yoikunai desu"],["よくないです","yokunai desu"]] },
    { n: 28, part: "B", lesson: 8, q: "ワット{先生|せんせい}は {親切|しんせつ} ＿＿＿ {先生|せんせい}です。", romaji: "Watto-sensei wa shinsetsu ___ sensei desu.",
      options: [["の","no"],["な","na"],["い","i"],["に","ni"]] },
    { n: 29, part: "B", lesson: 8, q: "{奈良|なら}は ＿＿＿ {町|まち}ですか。…{古|ふる}い {町|まち}です。", romaji: "Nara wa ___ machi desu ka. … Furui machi desu.",
      options: [["どう","dou"],["どれ","dore"],["どんな","donna"],["どこ","doko"]] },
    { n: 30, part: "B", lesson: 8, q: "{日本|にほん}の {食|た}べ{物|もの}は おいしいです ＿＿＿、{高|たか}いです。", romaji: "Nihon no tabemono wa oishii desu ___, takai desu.",
      options: [["そして","soshite"],["と","to"],["から","kara"],["が","ga"]] },

    // ---------- Part C (sentence building) ----------
    { n: 31, part: "C", lesson: 1, en: "Mr. Miller is an employee of IMC.",
      chunks: [["{社員|しゃいん}","shain"],["ミラーさんは","Miraa-san wa"],["です。","desu"],["IMCの","IMC no"]] },
    { n: 32, part: "C", lesson: 2, en: "This bag is Ms. Sato's.",
      chunks: [["{佐藤|さとう}さんの","Satou-san no"],["かばんは","kaban wa"],["この","kono"],["です。","desu"]] },
    { n: 33, part: "C", lesson: 3, en: "The wine department is on the first basement floor.",
      chunks: [["{地下|ちか}","chika"],["ワイン{売|う}り{場|ば}は","wain uriba wa"],["です。","desu"],["1{階|かい}","ikkai"]] },
    { n: 34, part: "C", lesson: 4, en: "The bank is open from 9 to 3.",
      chunks: [["3{時|じ}まで","san-ji made"],["です。","desu"],["{銀行|ぎんこう}は","ginkou wa"],["9{時|じ}から","ku-ji kara"]] },
    { n: 35, part: "C", lesson: 4, en: "I get up at 6 every morning.",
      chunks: [["わたしは","watashi wa"],["{起|お}きます。","okimasu"],["6{時|じ}に","roku-ji ni"],["{毎朝|まいあさ}","maiasa"]] },
    { n: 36, part: "C", lesson: 5, en: "I will go to Kyoto by train with my family.",
      chunks: [["{電車|でんしゃ}で","densha de"],["{行|い}きます。","ikimasu"],["{京都|きょうと}へ","Kyouto e"],["{家族|かぞく}と","kazoku to"]] },
    { n: 37, part: "C", lesson: 6, en: "Won't you have lunch with me tomorrow?",
      chunks: [["いっしょに","issho ni"],["{食|た}べませんか。","tabemasen ka"],["あした","ashita"],["{昼|ひる}ごはんを","hirugohan o"]] },
    { n: 38, part: "C", lesson: 7, en: "I eat rice with chopsticks.",
      chunks: [["ごはんを","gohan o"],["{食|た}べます。","tabemasu"],["はしで","hashi de"],["わたしは","watashi wa"]] },
    { n: 39, part: "C", lesson: 7, en: "Ms. Kimura received flowers from Mr. Yamada.",
      chunks: [["{花|はな}を","hana o"],["{山田|やまだ}さんに","Yamada-san ni"],["もらいました。","moraimashita"],["{木村|きむら}さんは","Kimura-san wa"]] },
    { n: 40, part: "C", lesson: 8, en: "Mt. Fuji is a very high mountain.",
      chunks: [["{山|やま}です。","yama desu"],["{高|たか}い","takai"],["とても","totemo"],["{富士山|ふじさん}は","Fujisan wa"]] }
  ]
};

// Turn {漢字|かんじ} into <ruby>漢字<rt>かんじ</rt></ruby>; everything else is escaped.
window.furigana = function (s) {
  const esc = (t) => t.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  return esc(s).replace(/\{([^|{}]+)\|([^{}]+)\}/g, "<ruby>$1<rt>$2</rt></ruby>");
};
window.plainJP = function (s) { return s.replace(/\{([^|{}]+)\|[^{}]+\}/g, "$1"); };
