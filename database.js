const vocabList = [
  {
    greek: "Ἀβραάμ, ὁ",
    definition: "亞伯拉罕 Abraham<br>[Indeclinable]",
    frequency: 73
  },
  {
    greek: "ἀγαπάω",
    definition: "愛 I love, cherish<br>(αγαπα-)<br>ἀγαπήσω, ἠγάπησα, ἠγάπηκα, ἠγάπημαι, ἠγαπήθην",
    frequency: 143
  },
  {
    greek: "ἀγάπη, ἡ, -ης",
    definition: "愛 love<br>(αγαπη-)",
    frequency: 116
  },
  {
    greek: "ἀγαθός, -ή, -όν",
    definition: "好、善的 good<br>(αγαθο/η-, Agatha)<br>參看<a href='http:\\www.chioulaoshi.org/BGreek/Paradigms/adj212.html' target='_blank'>詞形變化表</a>",
    frequency: 102
  },
  {
    greek: "ἀγαπητός, -ή, -όν",
    definition: "親愛的 beloved<br>(αγαπητο/η-)",
    frequency: 61
  },
  {
    greek: "ἄγγελος, ὁ, -ου",
    definition: "天使、使者 angel, messenger<br>(αγγελο-, Los Angelos = 洛杉磯)",
    frequency: 175
  },
  {
    greek: "ἅγιος, -ία, -ιον",
    definition: "聖潔的 holy<br>(αγιο/α-, hagiographa = 聖卷)",
    frequency: 233
  },
  {
    greek: "ἄγω",
    definition: "領、帶、走 I lead, bring, go<br>(αγ-)<br>ἄξω, ἥγαγον, -, ἦγμαι, ἤχθην, (ἦγον)",
    frequency: 67
  },
  {
    greek: "ἀδελφός, ὁ, -οῦ",
    definition: "兄弟 brother<br>(αδελφο- Philadelphia = 費城＝兄弟之愛)",
    frequency: 343
  },
  {
    greek: "αἷμα, τό, -ατος",
    definition: "血 blood<br>(αιματ-, hematology = 血液學)",
    frequency: 97
  },
  {
    greek: "αἴρω",
    definition: "拿起、拿走 I raise, take up, take away<br>(αρ-)<br>ἀρῶ, ἦρα, ἦρκα, ἦρμαι, ἦρθην",
    frequency: 101
  },
  {
    greek: "αἰτέω",
    definition: "求 I ask, demand<br>(αιτε-)<br>αἰτήσω, ᾔτησα, ᾔτηκα, -, -, (ᾔτουν)",
    frequency: 70
  },
  {
    greek: "αἰών, ὁ, -ῶνος",
    definition: "世代 age, eternity, world<br>(αιων-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/3declension.html#Liquid' target='_blank'>詞形變化表</a>",
    frequency: 122
  },
  {
    greek: "αἰώνιος, -ον",
    definition: "永恆的 eternal<br>(αιωνιο-)<br>[2-2]參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/adj212.html#2-2' target='_blank'>詞形變化表</a>",
    frequency: 71
  },
  {
    greek: "ἀκολουθέω",
    definition: "跟隨 I follow<br>(ακολουθε-, anacoluthon = 破格文體)<br>ἀκολουθήσω, ἠκολούθησα, ἠκολούθηκα, -, -, (ἠκολούθουν)",
    frequency: 90
  },
  {
    greek: "ἀκούω",
    definition: "聽、聽從 I hear, obey<br>(ακοϝ-, acoustics = 音質)<br>ἀκούσω, ἤκουσα, ἀκήκοα, -, ἠκούσθην, (ἤκουον)",
    frequency: 128
  },
  {
    greek: "ἀλήθεια, ἡ, -ας",
    definition: "真理 truth<br>(αληθεια-)",
    frequency: 109
  },
  {
    greek: "ἀλλά",
    definition: "（連接詞）但是、而、卻 but, yet, except",
    frequency: 638
  },
  {
    greek: "ἀλλήλων",
    definition: "（代名詞）彼此 one another<br>(αλληλο-, 原型就是所有格複數)",
    frequency: 100
  },
  {
    greek: "ἄλλος, -η, -ο",
    definition: "（代名詞）另一個 other, another<br>(αλλο/η-, allegory = 寓言)",
    frequency: 155
  },
  {
    greek: "ἁμαρτία, ἡ, -ίας",
    definition: "罪 sin<br>(αμαρτια-, hamartiology = 罪論)",
    frequency: 173
  },
  {
    greek: "ἀμήν",
    definition: "（質詞）阿們 amen, verily, truly",
    frequency: 129
  },
  {
    greek: "ἄν",
    definition: "（質詞）表達不一定、或許、視...而定 contingent<br>Untranslatable 通常不譯；無論⋯ -ever",
    frequency: 167
  },
  {
    greek: "ἀναβαίνω",
    definition: "上去 I go/come up, ascend<br>(ανα + βα-)<br>ἀναβήσομαι, ἀνέβην, ἀναβέβηκα, -, -, (ἀνέβαινον)",
    frequency: 82
  },
  {
    greek: "ἀνήρ, ὁ, ἀνδρός",
    definition: "人、男人、丈夫 man, male, husband<br>(ανερ-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/3declension.html#Syncopated' target='_blank'>詞形變化表</a>",
    frequency: 216
  },
  {
    greek: "ἄνθρωπος, ὁ, -ου",
    definition: "人、人類 man, mankind, humankind, human being<br>(ανθρωπο-, anthropology = 人類學)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/12declension.html' target='_blank'>詞形變化表</a>",
    frequency: 550
  },
  {
    greek: "ἀνίστημι",
    definition: "起來 I rise, get up, raise<br>(ανα + στα-)<br>ἀναστήσω, ἀνέστησα, -, -, -",
    frequency: 108
  },
  {
    greek: "ἀνοίγω",
    definition: "打開 I open<br>(αν + ϝοιγ-)<br>ἀνοίξω, ἀνέῳξα (or ἠνέῳξα, ἤνοιξα), ἀνέῳγα, ἀνέῳγμαι (or ἠνέῳγμαι), ἠνεῴχθην (or ἠνοίχθην)<br>詳見<a href='https://www.chioulaoshi.org/BGreek/Lesson23/V3/anoigo_form.html' target='_blank'>ἀνοίγω的詞形變化</a>",
    frequency: 77
  },
  {
    greek: "ἀπέρχομαι",
    definition: "離開、起程 I go away, depart<br>(απ + ερχ/ελευθ-)<br>ἀπελεύσομαι, ἀπῆλθον, ἀπελήλυθα, -, -",
    frequency: 117
  },
  {
    greek: "ἀπό (ἀπ', ἀφ')",
    definition: "（介繫詞）gen: (away) from 從⋯來、離開⋯",
    frequency: 646
  },
  {
    greek: "ἀποθνῄσκω",
    definition: "死 I die, am about to die<br>(απο + θαν-)<br>ἀποθανοῦμαι, ἀπέθανον, -, -, -, (ἀπέθνῃσκον)",
    frequency: 111
  },
  {
    greek: "ἀποκρίνομαι",
    definition: "回答 I answer<br>(απο + κριν-)<br>-, ἀπεκρινάμην, -, -, ἀπεκρίθην",
    frequency: 231
  },
  {
    greek: "ἀποκτείνω",
    definition: "殺 I kill<br>(απο + κτεν-)<br>ἀποκτενῶ, ἀπέκτεινα, -, -, ἀπεκτάνθην",
    frequency: 74
  },
  {
    greek: "ἀπόλλυμι",
    definition: "主動：毀滅、失去 I destroy, kill, lose<br>關身：滅亡 I perish, die<br>(απο + ολ-, Apollyon = 亞玻倫，毀滅者)<br>ἀπολέσω, ἀπώλεσα, ἀπόλωλα, -, -, (ἀπώλλυον)",
    frequency: 90
  },
  {
    greek: "ἀπολύω",
    definition: "釋放 I release, divorce, send off, forgive<br>(απο + λυ-)<br>ἀπολύσω, ἀπέλυσα, -, ἀπολέλυμαι, ἀπελύθην, (ἀπέλυον)",
    frequency: 66
  },
  {
    greek: "ἀποστέλλω",
    definition: "差遣 I send (away)<br>(απο + στελ-)<br>ἀποστελῶ, ἀπέστειλα, ἀπέσταλκα, ἀπέσταλμαι, ἀπεστάλην",
    frequency: 132
  },
  {
    greek: "ἀπόστολος, ὁ, -ου",
    definition: "使徒 apostle, messenger<br>(αποστολο-)",
    frequency: 80
  },
  {
    greek: "ἄρτος, ὁ, -ου",
    definition: "餅、食物 bread, loaf, food<br>(αρτο-)",
    frequency: 97
  },
  {
    greek: "ἀρχή, ἡ, -ῆς",
    definition: "起初 beginning; 統治者 ruler<br>(αρχη-, archbishop = 大主教)",
    frequency: 55
  },
  {
    greek: "ἀρχιερεύς, ὁ, -εως",
    definition: "祭司長、大祭司 chief priest, high priest<br>(αρχ + ιερεϝ-)",
    frequency: 122
  },
  {
    greek: "ἄρχω",
    definition: "主動：統治 I rule<br>關身：開始 I begin<br>(αρχ-)<br>ἄρξομαι, ἠρξαμην, -, -, -",
    frequency: 86
  },
  {
    greek: "ἀσπάζομαι",
    definition: "問安 I greet, salute<br>(ασπαδ-)<br>-, ἠσπασάμην, -, -, -, (ἠσπαζόμην)",
    frequency: 59
  },
  {
    greek: "αὐτός, -ή, -ό",
    definition: "➀（第三人稱代名詞）他 he/she/it<br>➁ 親自 self<br>➂（形容詞）相同的 same<br>(αυτο/η-, autobiography = 自傳)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/pronouns.html#Personal_3' target='_blank'>詞形變化表</a>",
    frequency: 5595
  },
  {
    greek: "ἀφίημι",
    definition: "離棄、允許、赦免 I let go, leave, permit, forgive<br>(αφ + σε-)<br>ἀφήσω, ἀφῆκα, -, ἀφέωμαι, ἀφέθην, (ἤφιον)",
    frequency: 143
  },
  {
    greek: "βάλλω",
    definition: "投擲、放 I throw, put<br>(βαλ-)<br>βαλῶ, ἔβαλον, βέβληκα, βέβλημαι, ἐβλήθην, (ἔβαλλον)",
    frequency: 122
  },
  {
    greek: "βαπτίζω",
    definition: "施洗、浸 I baptize, dip, immerse<br>(βαπτιδ-)<br>βαπτίσω, ἐβάπτισα, -, βεβάπτισμαι, ἐβαπτίσθην, (ἐβάπτιζον)",
    frequency: 77
  },
  {
    greek: "βασιλεία, ἡ, -ας",
    definition: "國 kingdom<br>(βασιλεια-)",
    frequency: 162
  },
  {
    greek: "βασιλεύς, ὁ, -έως",
    definition: "王 king<br>(βασιλεϝ-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/3declension.html#VowelStem' target='_blank'>詞形變化表</a>",
    frequency: 115
  },
  {
    greek: "βλέπω",
    definition: "看、小心 I see, watch out<br>(βλεπ-)<br>βλέψω, ἔβλεψα, -, -, -, (ἔβλεπον)",
    frequency: 133
  },
  {
    greek: "Γαλιλαία, ἡ, -ας",
    definition: "加利利 Galilee",
    frequency: 61
  },
  {
    greek: "γάρ",
    definition: "（連接詞）因為 for, then<br>Postpositive",
    frequency: 1041
  },
  {
    greek: "γεννάω",
    definition: "生(產) I beget, give birth to, produce<br>(γεννα-)<br>γεννήσω, ἐγέννησα, γεγέννηκα, γεγέννημαι, ἐγεννήθην",
    frequency: 97
  },
  {
    greek: "γῆ, ἡ, γῆς",
    definition: "地 earth, land, region<br>(γη-, geology = 地質學)",
    frequency: 250
  },
  {
    greek: "γίνομαι",
    definition: "成為、發生 I become, am, exist, am born, am created<br>(γεν-)<br>γενήσομαι, ἐγενόμην, γέγονα, γεγένημαι, ἐγενήθην, (ἐγινόμην)",
    frequency: 669
  },
  {
    greek: "γινώσκω",
    definition: "知道 I know, realize<br>(γνο-, Gnosticism = 諾斯底主義)<br>γνώσομαι, ἔγνων, ἔγνωκα, ἔγνωσμαι, ἐγνώσθην, (ἐγίνωσκον)",
    frequency: 222
  },
  {
    greek: "γλῶσσα, ἡ, -ης",
    definition: "舌、語言 tongue, language<br>(γλωσσα-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/12declension.html#1Dec' target='_blank'>詞形變化表</a>",
    frequency: 50
  },
  {
    greek: "γραμματεύς, ὁ, -εως",
    definition: "文士 scribe<br>(γραμματεϝ-, grammar = 文法)",
    frequency: 63
  },
  {
    greek: "γραφή, ἡ, -ῆς",
    definition: "聖經 writing, Scripture<br>(γραφη-, autograph = 親筆簽名)",
    frequency: 50
  },
  {
    greek: "γράφω",
    definition: "寫 I write<br>(γραφ-), γράψω, ἔγραψα, γέγραφα, γέγραμμαι, ἐγράφην, (ἔγραφον)",
    frequency: 191
  },
  {
    greek: "γυνή, ἡ, γυναικός",
    definition: "女人、妻子 woman, wife<br>(γυναικ-, gynecology = 婦科)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/3declension.html#Irregular' target='_blank'>詞形變化表</a>",
    frequency: 215
  },
  {
    greek: "δαιμόνιον, τό, -ου",
    definition: "鬼 demon<br>(δαιμονιο-)",
    frequency: 63
  },
  {
    greek: "Δαυίδ, ὁ",
    definition: "大衛 David<br>[Indeclinable]",
    frequency: 59
  },
  {
    greek: "δέ",
    definition: "（連接詞）但、而、卻 but, and<br>Postpositive",
    frequency: 2792
  },
  {
    greek: "δεῖ",
    definition: "必須 it is necessary<br>(這個動詞一定是第三人稱單數)<br>(Imperfect: ἔδει; Infinitive: δεῖν; Subjunctive: δέῃ)",
    frequency: 101
  },
  {
    greek: "δείκνυμι",
    definition: "指示 I show, explain<br>(δεικνυ/δεικ-)<br>δείξω, ἔδειξα, δέδειχα, -, ἐδείχθην",
    frequency: 33
  },
  {
    greek: "δεξιός, -ιά, -ιόν",
    definition: "右邊的 right (hand/side)<br>(δεξιο/α-, dexterous = 手巧的)",
    frequency: 54
  },
  {
    greek: "δέχομαι",
    definition: "領受、接待 I take, receive<br>(δεχ-)<br>δέξομαι, ἐδεξάμην, -, δέδεγμαι, ἐδέχθην",
    frequency: 56
  },
  {
    greek: "διά (δι')",
    definition: "（介繫詞）gen: through 經由、藉著<br>acc: on account of 因為<br>(diameter = 直徑)",
    frequency: 667
  },
  {
    greek: "διδάσκαλος, ὁ, -ou",
    definition: "老師 teacher<br>(διδασκαλο-)",
    frequency: 59
  },
  {
    greek: "διδάσκω",
    definition: "教導 I teach<br>(διδακ-)<br>διδάξω, ἐδίδαξα, -, -, ἐδιδάχθην, (ἐδίδασκον)",
    frequency: 97
  },
  {
    greek: "δίδωμι",
    definition: "賜給 I give, entrust, give back, put<br>(δο-)<br>δώσω, ἔδωκα, δέδωκα, δέδομαι, ἐδόθην, (ἐδίδουν)",
    frequency: 415
  },
  {
    greek: "δίκαιος, -αία, -ον",
    definition: "義的 right, just, righteous<br>(δικαιο/α-)",
    frequency: 79
  },
  {
    greek: "δικαιοσύνη, ἡ, -ης",
    definition: "義 righteousness, justice<br>(δικαιοσυνη-)",
    frequency: 92
  },
  {
    greek: "διό",
    definition: "（連接詞）因此 therefore, for this reason",
    frequency: 53
  },
  {
    greek: "δοκέω",
    definition: "以為 I think, seem<br>(δοκ-)<br>δόξω, ἔδοξα, -, -, -, (ἐδόκουν)",
    frequency: 62
  },
  {
    greek: "δόξα, ἡ, -ης",
    definition: "榮耀 glory<br>(δοξα-, doxology = 三一頌)",
    frequency: 166
  },
  {
    greek: "δοξάζω",
    definition: "榮耀、讚美 I praise, honor, glorify<br>(δοξαδ-)<br>δοξάσω, ἐδόξασα, -, δεδόξασμαι, ἐδοξάσθην, (ἐδόξαζον)",
    frequency: 61
  },
  {
    greek: "δοῦλος, ὁ, -ου",
    definition: "奴僕 slave, servant<br>(δουλο-)",
    frequency: 124
  },
  {
    greek: "δύναμαι",
    definition: "能夠 I am able, am powerful<br>(δυν/δυνα-)<br>δυνήσομαι, -, -, -, ἠδυνήθην, (ἐδυνάμην)",
    frequency: 210
  },
  {
    greek: "δύναμις, ἡ, -εως",
    definition: "能力、異能 power, miracle<br>(δυναμι-, dynamite = 炸藥)",
    frequency: 119
  },
  {
    greek: "δύο",
    definition: "二 two<br>(詞形變化: δύο, δύο, δυσί(ν), δύο)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/numerals.html' target='_blank'>數字表</a>)",
    frequency: 135
  },
  {
    greek: "δώδεκα",
    definition: "十二 twelve<br>(Indeclinable)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/numerals.html' target='_blank'>數字表</a>)",
    frequency: 75
  },
  {
    greek: "ἐάν",
    definition: "（連接詞）如果 if<br>質詞）相當於ἄν<br>(351, a crasis of εἰ + ἄν)",
    frequency: 351
  },
  {
    greek: "ἑαυτοῦ, -ῆς, -οῦ",
    definition: "他自己 him/her/itself, of one's own<br>(εαυτο/η-, 原型就是所有格)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/pronouns.html#Reflexive' target='_blank'>第三人稱反身代名詞</a>詞形變化表",
    frequency: 319
  },
  {
    greek: "ἐγείρω",
    definition: "起來、喚起 I raise up, wake<br>(εγερ-)<br>ἐγερῶ, ἤγειρα, ἐγήγερκα, ἐγήγερμαι, ἠγέρθην",
    frequency: 144
  },
  {
    greek: "ἐγώ",
    definition: "我 I<br>(ego = 自我)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/pronouns.html#Personal' target='_blank'>第一人稱代名詞</a>詞形變化表",
    frequency: 1725
  },
  {
    greek: "ἔθνος, τό, -ους",
    definition: "外邦人、國、民 nation, the Gentiles<br>(εθνεσ-, ethnic = 種族的)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/3declension.html#Neuter' target='_blank'>詞形變化表</a>",
    frequency: 162
  },
  {
    greek: "εἰ",
    definition: "（連接詞）如果 if; 是否 whether",
    frequency: 503
  },
  {
    greek: "εἰ μή",
    definition: "（片語）除非、除了 except, unless",
    frequency: 345
  },
  {
    greek: "εἰμί",
    definition: "我是、存在 I am, exist, live, am present<br>(εσ-)<br>ἔσομαι, -, -, -, -, (ἤμην)",
    frequency: 2460
  },
  {
    greek: "εἰρήνη, ἡ, -ης",
    definition: "平安、和平 peace<br>(ειρηνη-)",
    frequency: 92
  },
  {
    greek: "εἰς",
    definition: "（介繫詞）acc: into, in, for 進入⋯",
    frequency: 1768
  },
  {
    greek: "εἷς, μία, ἕν",
    definition: "一 one<br>(εν/μια-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/adj313.html#3-1-3' target='_blank'>詞形變化表</a><br>另參<a href='https://www.chioulaoshi.org/BGreek/Paradigms/numerals.html' target='_blank'>數字表</a>)",
    frequency: 344
  },
  {
    greek: "εἰσέρχομαι",
    definition: "進入 I come/go into, enter<br>(εισ + ερχ/ελευθ-)<br>εἰσελεύσομαι, εἰσῆλθον, εἰσελήλυθα, -, -",
    frequency: 194
  },
  {
    greek: "εἴτε",
    definition: "（連接詞）無論⋯或⋯、如果 whether...or, if",
    frequency: 65
  },
  {
    greek: "ἐκ (ἐξ)",
    definition: "（介繫詞）gen: from, out of 從⋯出來、出於⋯",
    frequency: 914
  },
  {
    greek: "ἕκαστος, -η, -ον",
    definition: "每 each, every<br>(εκαστο/η-)",
    frequency: 82
  },
  {
    greek: "ἐκβάλλω",
    definition: "趕出 I cast out, send out<br>(εκ + βαλ-)<br>ἐκβαλῶ, ἐξέβαλον, ἐκβέβληκα, ἐκβέβλημαι, ἐξεβλήθην, (ἐξέβαλλον)",
    frequency: 81
  },
  {
    greek: "ἐκεῖ",
    definition: "（副詞）在那裡 there, in that place",
    frequency: 105
  },
  {
    greek: "ἐκεῖνος, -η, -ο",
    definition: "那個 that<br>(εκεινο/η-)",
    frequency: 265
  },
  {
    greek: "ἐκκλησία, ἡ, -ας",
    definition: "教會、聚會 church, assembly, congregation<br>(εκκλησια-, ecclesiology = 教會論)",
    frequency: 114
  },
  {
    greek: "ἐλπίς, ἡ, -ίδος",
    definition: "希望 hope, expectation<br>(ελπιδ-)",
    frequency: 53
  },
  {
    greek: "ἐμός, -ή, -όν",
    definition: "我的 my, mine (regardless of case)<br>(εμο/η-)",
    frequency: 76
  },
  {
    greek: "ἐν",
    definition: "（介繫詞）dat: in, on, among 在⋯裡",
    frequency: 2752
  },
  {
    greek: "ἐντολή, ἡ, -ῆς",
    definition: "誡命 commandment<br>(εντολη-)",
    frequency: 67
  },
  {
    greek: "ἐνώπιον",
    definition: "（介繫詞）在⋯之前 gen: before",
    frequency: 94
  },
  {
    greek: "ἐξέρχομαι",
    definition: "出來、出去 I come/go out<br>(εξ + ερχ/ελευθ-)<br>ἐξελεύσομαι, ἐξῆλθον, ἐξελήλυθα, -, -, (ἐξηρχόμην)",
    frequency: 218
  },
  {
    greek: "ἐξουσία, ἡ, -ας",
    definition: "權柄、權勢 authority, power<br>(εξουσια-)",
    frequency: 102
  },
  {
    greek: "ἔξω",
    definition: "（副詞）外面 outside, out<br>（介繫詞）gen: outside ⋯外面",
    frequency: 63
  },
  {
    greek: "ἐπαγγελία, ἡ, -ας",
    definition: "應許 promise<br>(επαγγελια-)",
    frequency: 52
  },
  {
    greek: "ἐπερωτάω",
    definition: "求、問 I ask (for), question<br>(επ + ερωτα-)<br>ἐπερωτήσω, ἐπηρώτησα, -, -, ἐπηρωτήθην, (ἐπηρώτων)",
    frequency: 56
  },
  {
    greek: "ἐπί (ἐπ', ἐφ')",
    definition: "（介繫詞）gen/dat/acc: on, over 在⋯之上; on the basis of 基於⋯<br>(epidermis = 表皮層)",
    frequency: 890
  },
  {
    greek: "ἑπτά",
    definition: "七 seven<br>(heptagon = 七角形)<br>(Indeclinable)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/numerals.html' target='_blank'>數字表</a>)",
    frequency: 88
  },
  {
    greek: "ἔργον, τό, -ου",
    definition: "工作、行為 work, deed, action<br>(εργο-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/12declension.html' target='_blank'>詞形變化表</a>",
    frequency: 169
  },
  {
    greek: "ἔρχομαι",
    definition: "來、去 I come, go<br>(ερχ/ελευθ-)<br>ἐλεύσομαι, ἦλθον, ἐλήλυθα, -, -, (ἠρχόμην)",
    frequency: 634
  },
  {
    greek: "ἐρωτάω",
    definition: "求、問 I ask, request<br>(ερωτα-)<br>ἐρωτήσω, ἠρώτησα, -, -, ἠρωτήθην, (ἠρώτων)",
    frequency: 63
  },
  {
    greek: "ἐσθίω",
    definition: "吃 I eat<br>(εσθι/φαγ-, Esophagus = 食道)<br>φάγομαι, ἔφαγον, -, -, -, (ἤσθιον)",
    frequency: 158
  },
  {
    greek: "ἔσχατος, -η, -ον",
    definition: "末了的 last<br>(εσχατο/η-, eschatology = 末世論)",
    frequency: 52
  },
  {
    greek: "ἕτερος, -α, -ον",
    definition: "別的、相異的 other, another, different<br>(ετερο/α-, heterosexual = 異性戀)",
    frequency: 99
  },
  {
    greek: "ἔτι",
    definition: "（副詞）仍、還、甚至 still, yet, even",
    frequency: 93
  },
  {
    greek: "εὐαγγελίζω",
    definition: "傳福音 I bring good news, preach<br>(ευ + αγγελιδ-, evangelize)<br>-, εὐηγγέλισα, -, εὐηγγέλισμαι, εὐηγγέλισθην, (εὐηγγέλιζον)",
    frequency: 54
  },
  {
    greek: "εὐαγγέλιον, τό, -ου",
    definition: "福音 good news, gospel<br>(ευαγγελιο-, evangelism = 傳福音)",
    frequency: 76
  },
  {
    greek: "εὐθύς",
    definition: "（副詞）立刻、就 immediately<br>（形容詞）直、正 straight, proper",
    frequency: 51
  },
  {
    greek: "εὑρίσκω",
    definition: "尋找、發現、獲得 I find, discover, obtain<br>(ευρ-, Eureka)<br>εὑρήσω, εὗρον, εὑρήκα, -, εὑρέθην, (εὕρισκον or ηὕρισκον)",
    frequency: 176
  },
  {
    greek: "ἔφη",
    definition: "他說 he/she/it was saying, he/she/it said<br>(φημί 的第三人稱單數，未完成式或不定式）",
    frequency: 40
  },
  {
    greek: "ἔχω",
    definition: "有、持 I have, hold<br>(σεχ-)<br>ἕξω, ἔσχον, ἔσχηκα, -, -, (εἶχον)",
    frequency: 708
  },
  {
    greek: "ἕως",
    definition: "（連接詞）直到、只要 until, as long as<br>（介繫詞）gen: till, to 直到",
    frequency: 146
  },
  {
    greek: "ζάω",
    definition: "活、得生 I live<br>(ζα/ζη-)<br>ζήσω, ἔζησα, -, -, -, (ἔζων)",
    frequency: 140
  },
  {
    greek: "ζητέω",
    definition: "尋求 I seek, desire, try to obtain<br>(ζητε-)<br>ζητήσω, ἐζήτησα, -, -, ἐζητήθην, (ἐζήτουν)",
    frequency: 117
  },
  {
    greek: "ζωή, ἡ, -ῆς",
    definition: "生命 life<br>(ζωη-, zoology = 動物學)",
    frequency: 135
  },
  {
    greek: "ἤ",
    definition: "（連接詞）或 or, 較 than",
    frequency: 343
  },
  {
    greek: "ἤδη",
    definition: "（副詞）已經 already, now",
    frequency: 61
  },
  {
    greek: "ἡμεῖς",
    definition: "我們 we<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/pronouns.html#Personal' target='_blank'>第一人稱代名詞</a>詞形變化表",
    frequency: 864
  },
  {
    greek: "ἡμέρα, ἡ, -ας",
    definition: "日、白天 day<br>(ημερα-, ephemeral = 僅有一日生命的)",
    frequency: 389
  },
  {
    greek: "θάλασσα, ἡ, -ης",
    definition: "海、湖 sea, lake<br>(θαλασσα-)",
    frequency: 91
  },
  {
    greek: "θάνατος, ὁ, -ου",
    definition: "死亡 death<br>(θανατο-, euthanasia = 安樂死)",
    frequency: 120
  },
  {
    greek: "θέλημα, τό, -ματος",
    definition: "旨意、意願 will, desire<br>(θεληματ-)",
    frequency: 62
  },
  {
    greek: "θέλω",
    definition: "願意、想要 I will, wish, desire<br>(θελ/θελε-)<br>θελήσω, ἠθέλησα, -, -, ἠθελήθην, (ἤθελον)",
    frequency: 208
  },
  {
    greek: "θεός, ὁ, -οῦ",
    definition: "神 God, god<br>(θεο-, theology = 神學)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/12declension.html' target='_blank'>詞形變化表</a>",
    frequency: 1317
  },
  {
    greek: "θεωρέω",
    definition: "看 I look at, behold<br>(θεωρε-)<br>-, ἐθεώρησα, -, -, -",
    frequency: 58
  },
  {
    greek: "θρόνος, ὁ, -ου",
    definition: "寶座 throne<br>(θρονο-)",
    frequency: 62
  },
  {
    greek: "ἴδε",
    definition: "（感嘆詞）看哪 See! Behold!",
    frequency: 34
  },
  {
    greek: "ἴδιος, -α, -ον",
    definition: "自己的 one's own<br>(ιδιο/α-, idiosyncrasy = 個人廦性)",
    frequency: 114
  },
  {
    greek: "ἰδού",
    definition: "（感嘆詞）看哪 See! Behold!",
    frequency: 200
  },
  {
    greek: "ἱερόν, τό, -οῦ",
    definition: "聖殿 temple<br>(ιερο-)",
    frequency: 71
  },
  {
    greek: "Ἱεροσόλυμα, τά or ἡ",
    definition: "耶路撒冷 Jerusalem<br>(常為複數)",
    frequency: 62
  },
  {
    greek: "Ἰερουσαλήμ, ἡ",
    definition: "耶路撒冷 Jerusalem<br>[Indeclinable]",
    frequency: 77
  },
  {
    greek: "Ἰησοῦς",
    definition: "耶穌 Jesus<br>(ὁ Ἰησοῦς, τοῦ Ἰησοῦ, τῷ Ἰησοῦ, τὸν Ἰησοῦν)",
    frequency: 917
  },
  {
    greek: "ἱμάτιον, τό, -ου",
    definition: "外袍 garment, cloak<br>(ιματιο-)",
    frequency: 60
  },
  {
    greek: "ἵνα",
    definition: "（連接詞）表達目的或結果：為了、以致 in order that, so that<br>表達內容：that",
    frequency: 663
  },
  {
    greek: "Ἰουδαία, ἡ, -ας",
    definition: "猶太(地) Judea<br>(Ιουδαια-)",
    frequency: 43
  },
  {
    greek: "Ἰουδαῖος, -αία, -αῖον",
    definition: "（形容詞）猶太的 Jewish<br>（名詞）猶太人 Jew<br>(Ιουδαιο/α-)",
    frequency: 195
  },
  {
    greek: "Ἰσραήλ, ὁ",
    definition: "以色列 Israel<br>[Indeclinable]",
    frequency: 68
  },
  {
    greek: "ἵστημι",
    definition: "站 I stand, cause to stand<br>(στα-)<br>στήσω, ἔστησα or ἔστην, ἕστηκα, ἕσταμαι, ἐστάθην, (ἵστην)",
    frequency: 154
  },
  {
    greek: "Ἰωάννης, ὁ, -ου",
    definition: "約翰 John<br>(Ιωαννη-)<br>(有時拼成 Ἰωάνης)",
    frequency: 135
  },
  {
    greek: "καγώ",
    definition: "（兩字綴合）and I (a crasis of καί + ἐγώ)<br>[Indeclinable]",
    frequency: 84
  },
  {
    greek: "κάθημαι",
    definition: "坐下 I sit (down)<br>(καθη-, cathedral = [設主教座的]大教堂)<br>καθήσομαι, -, -, -, -, (ἐκαθήμην)",
    frequency: 91
  },
  {
    greek: "καθώς",
    definition: "（連接詞）正如、按照、當⋯時 as, even as",
    frequency: 182
  },
  {
    greek: "καί",
    definition: "（連接詞）及 and<br>（副詞）也 also, even",
    frequency: 9153
  },
  {
    greek: "καιρός, ὁ, -οῦ",
    definition: "時候、時機 (appointed) time, season<br>(καιρο-)",
    frequency: 85
  },
  {
    greek: "κακός, -ή, -όν",
    definition: "惡的、不好的 bad, evil<br>(κακο/η-)",
    frequency: 50
  },
  {
    greek: "καλέω",
    definition: "呼叫、稱、邀請 I call, name, invite<br>(καλεϝ-)<br>καλέσω, ἐκάλεσα, κέκληκα, κέκλημαι, ἐκλήθην, (ἐκαλουν)",
    frequency: 148
  },
  {
    greek: "καλός, -ή, -όν",
    definition: "美好的 beautiful, good<br>(καλο/η-, 100, calligraphy = 書法)",
    frequency: 100
  },
  {
    greek: "καρδία, ἡ, -ας",
    definition: "心 heart<br>(καρδια-, cardiology = 心臟學)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/12declension.html#1Dec' target='_blank'>詞形變化表</a>",
    frequency: 156
  },
  {
    greek: "καρπός, ὁ, -οῦ",
    definition: "果子、收成 fruit, crop, result<br>(καρπο-)",
    frequency: 66
  },
  {
    greek: "κατά (κατ', καθ')",
    definition: "（介繫詞）gen: down, against 往下、對抗<br>acc: according to 按照",
    frequency: 473
  },
  {
    greek: "καταβαίνω",
    definition: "往下、降下 I go/come down, descend<br>(κατα + βα-)<br>καταβήσομαι, κατέβην, καταβέβηκα, -, -, (κατέβαινον)",
    frequency: 81
  },
  {
    greek: "κεφαλή, ἡ, -ης",
    definition: "頭 head<br>(κεφαλη-, hydrocephalus = 腦水腫)",
    frequency: 75
  },
  {
    greek: "κηρύσσω",
    definition: "傳講 I proclaim, preach<br>(κηρυγ-, Kerygma = 福音信息)<br>κηρύξω, ἐκήρυξα, -, κεκήρυγμαι, ἐκηρύχθην, (ἐκήρυσσον)",
    frequency: 61
  },
  {
    greek: "κόσμος, ὁ, -ου",
    definition: "世界、世人、宇宙 world, universe<br>(κοσμο-, cosmology = 宇宙論)",
    frequency: 186
  },
  {
    greek: "κράζω",
    definition: "喊叫 I cry out, call out<br>(κραγ-)<br>κράξω, ἔκραξα, κέκραγα, -, -, (ἔκραζον)",
    frequency: 56
  },
  {
    greek: "κρίνω",
    definition: "審判、定罪、決定 I judge, decide, prefer<br>(κριν-, critic = 評審)<br>κρινῶ, ἔκρινα, κέκρικα, κέκριμαι, ἐκρίθην, (ἔκρινον)",
    frequency: 114
  },
  {
    greek: "κύριος, ὁ, -ου",
    definition: "主 lord, master, sir<br>(κυριο-)",
    frequency: 717
  },
  {
    greek: "λαλέω",
    definition: "說 I speak, say<br>(λαλε-)<br>λαλήσω, ἐλάλησα, λελάληκα, λελάλημαι, ἐλαλήθην, (ἐλάλουν)",
    frequency: 296
  },
  {
    greek: "λαμβάνω",
    definition: "拿、領受 I take, receive<br>(λαβ-)<br>λήμψομαι, ἔλαβον, εἴληφα, εἴλημμαι, ἐλήμφθην, (ἐλάμβανον)",
    frequency: 258
  },
  {
    greek: "λαός, ὁ, -οῦ",
    definition: "子民、百姓 people, crowd<br>(λαο-, laity = 平信徒)",
    frequency: 142
  },
  {
    greek: "λέγω",
    definition: "說、稱 I say, call<br>(λεγ/ϝερ/ϝιπ-)<br>ἐρῶ, εἶπον, εἴρηκα, εἴρημαι, ἐρρέθην, (ἔλεγον)",
    frequency: 2354
  },
  {
    greek: "λίθος, ὁ, -ου",
    definition: "石頭 stone<br>(λιθο-)",
    frequency: 59
  },
  {
    greek: "λόγος, ὁ, -ου",
    definition: "道、話、事 word, matter<br>(λογο-, -logy = ⋯學)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/12declension.html' target='_blank'>詞形變化表</a>",
    frequency: 330
  },
  {
    greek: "λοιπός, -ή, -όν",
    definition: "（形容詞）剩下的 remaining, the rest<br>（副詞）此後、此外 as for the rest, besides, finally<br>(λοιπο/η-)",
    frequency: 55
  },
  {
    greek: "λύω",
    definition: "釋放、毀壞、違犯 I loose, destroy, break<br>(λυ-)<br>λύσω, ἔλυσα, λέλυκα, λέλυμαι, ἐλύθην, (ἔλυον)",
    frequency: 42
  },
  {
    greek: "μαθητής, ὁ, -ou",
    definition: "門徒、學生 disciple, student<br>(μαθητη-)",
    frequency: 261
  },
  {
    greek: "μακάριος, -ια, -ιον",
    definition: "有福的 blessed, happy<br>(μακαριο/α-)<br>(八福每句皆是這個字起頭，參<a href='https://www.chioulaoshi.org/BGreek/Lesson01/beatitudes.html' target='_blank'>八福朗讀練習</a>)",
    frequency: 50
  },
  {
    greek: "μᾶλλον",
    definition: "（副詞）更 more, 寧可 rather",
    frequency: 81
  },
  {
    greek: "μαρτυρέω",
    definition: "見證 I bear witness, testify<br>(μαρτυρε-, martyr = 殉道者)<br>μαρτυρήσω, ἐμαρτύρησα, μεμαρτύρηκα, μεμαρτύρημαι, ἐμαρτυρήθην, (ἐμαρτύρουν)",
    frequency: 76
  },
  {
    greek: "μέγας, μεγάλη, μέγα",
    definition: "大 large, great<br>(μεγαλο/η-, μεγα-, megaphone = 擴音器)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/adj212.html#Irregular' target='_blank'>詞形變化表</a>",
    frequency: 243
  },
  {
    greek: "μείζων, μεῖζον",
    definition: "更大的 greater<br>(μειζον-, μέγας 的比較級)<br>[3-3]",
    frequency: 48
  },
  {
    greek: "μέλλω",
    definition: "快要 I am about to<br>(μελλε-)<br>μελλήσω, -, -, -, -, (ἔμελλον or ἤμελλον)",
    frequency: 109
  },
  {
    greek: "μέν",
    definition: "（連接詞）一方面 on the one hand<br>（副詞）確實 indeed<br>Postpositive",
    frequency: 179
  },
  {
    greek: "μένω",
    definition: "留、住 I remain, live<br>(μεν-, 118)<br>μενῶ, ἔμεινα, μεμένηκα, -, -, (ἔμενον)",
    frequency: 118
  },
  {
    greek: "μέσος, -η, -ον",
    definition: "當中 middle, in the midst<br>(μεσο/η-)",
    frequency: 58
  },
  {
    greek: "μετά (μετ', μεθ')",
    definition: "（介繫詞）gen: with (person) 與⋯一起<br>acc: after 在⋯之後",
    frequency: 469
  },
  {
    greek: "μή",
    definition: "（否定）not, lest",
    frequency: 1042
  },
  {
    greek: "μηδέ",
    definition: "（連接詞）也不、甚至不 but not, nor, not even<br>(μή + δέ)",
    frequency: 56
  },
  {
    greek: "μηδείς, -δεμία, -δέν",
    definition: "沒(人、事物) no one, nothing<br>(μη[δε] + εν/μια-)",
    frequency: 90
  },
  {
    greek: "μήτηρ, ἡ, μητρός",
    definition: "母親 mother<br>(μητερ-)",
    frequency: 83
  },
  {
    greek: "μου (ἐμοῦ)",
    definition: "我的 my<br>(ἐγώ 的所有格單數，參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/pronouns.html#Personal' target='_blank'>第一人稱代名詞</a>詞形變化表)",
    frequency: 345
  },
  {
    greek: "μόνος, -η, -ον",
    definition: "只、單獨 alone, only, by oneself<br>(μονο/η-, monotone = 單調)",
    frequency: 114
  },
  {
    greek: "Μωϋσῆς, ὁ, -εως",
    definition: "摩西 Moses<br>(Μωϋσῆς, Μωϋσέως, Μωϋσεῖ, Μωϋσῆν)",
    frequency: 80
  },
  {
    greek: "νεκρός, -ά, -όν",
    definition: "死的 dead<br>(νεκρο/α-, necrophobia = 對死亡不正常的恐懼)",
    frequency: 128
  },
  {
    greek: "νόμος, ὁ, -ου",
    definition: "律法、律 law, principle<br>(νομο-, autonomous = 自治的)",
    frequency: 194
  },
  {
    greek: "νῦν",
    definition: "（副詞）現在、剛才 now, just now",
    frequency: 147
  },
  {
    greek: "νύξ, ἡ, νυκτός",
    definition: "夜晚 night<br>(νυκτ-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/3declension.html#Mute' target='_blank'>詞形變化表</a>",
    frequency: 61
  },
  {
    greek: "ὁ, ἡ, τό",
    definition: "（冠詞）the<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/article.html' target='_blank'>冠詞</a>詞形變化表",
    frequency: 19870
  },
  {
    greek: "ὁδός, ἡ, -οῦ",
    definition: "道路 way, road, journey, conduct<br>(οδο-)",
    frequency: 101
  },
  {
    greek: "οἶδα",
    definition: "知道 I know, understand<br>(ειδ-)<br>εἰδήσω, ᾔδειν, -, -, -<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/perfect.html#oida' target='_blank'>詞形變化表</a>",
    frequency: 318
  },
  {
    greek: "οἰκία, ἡ, -ας",
    definition: "房子、家 house, home, household<br>(οικια-)",
    frequency: 93
  },
  {
    greek: "οἶκος, ὁ, -ου",
    definition: "房子、家、殿宇 house, home<br>(οικο-)",
    frequency: 114
  },
  {
    greek: "ὅλος, -η, -ον",
    definition: "（形容詞）整個 whole, complete<br>（副詞）完全 entirely<br>(ολο/η-, holistic = 全人的)",
    frequency: 109
  },
  {
    greek: "ὄνομα, τό, -ματος",
    definition: "名字 name<br>(ονοματ-)參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/3declension.html#Neuter' target='_blank'>詞形變化表</a>",
    frequency: 231
  },
  {
    greek: "ὅπου",
    definition: "（連接詞）在哪裡 where",
    frequency: 82
  },
  {
    greek: "ὅπως",
    definition: "（連接詞）①表達目的：為了 in order that<br>②表達內容：that, how",
    frequency: 53
  },
  {
    greek: "ὁράω",
    definition: "看見 I see, notice, experience<br>(ορα/οπ/ϝιδ-, panorama = 全景)<br>ὄψομαι, εἶδον, ἑώρακα, -, ὤφθην",
    frequency: 454
  },
  {
    greek: "ὄρος, τό, ὄρους",
    definition: "山 mountain, hill<br>(ορεσ-, orography = 山志學)",
    frequency: 63
  },
  {
    greek: "ὅς, ἥ, ὅ",
    definition: "（關係代名詞）who, which<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/pronouns.html#Relative' target='_blank'>關係代名詞</a>詞形變化表",
    frequency: 1365
  },
  {
    greek: "ὅσος, -η, -ον",
    definition: "（相關代名詞）凡⋯都 as many as, who/whatsoever<br>(οσο/η-)",
    frequency: 110
  },
  {
    greek: "ὅστις, ἥτις, ὅτι",
    definition: "（不定關係代名詞）whoever, whichever, whatever<br>(ος + τις)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/pronouns.html#Relative' target='_blank'>詞形變化表</a>",
    frequency: 153
  },
  {
    greek: "ὅταν",
    definition: "（連接詞）何時 whenever<br>(a crasis of ὅτε + ἄν)",
    frequency: 123
  },
  {
    greek: "ὅτε",
    definition: "（連接詞）當 when",
    frequency: 103
  },
  {
    greek: "ὅτι",
    definition: "（連接詞）➀表達內容：that<br>➁表達原因：因為 because, since",
    frequency: 1296
  },
  {
    greek: "οὐ, οὐκ, οὐχ",
    definition: "（否定）不 not",
    frequency: 1606
  },
  {
    greek: "οὗ",
    definition: "（副詞）在哪裡 where<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/confusing.html' target='_blank'>易混淆的詞形</a>",
    frequency: 24
  },
  {
    greek: "οὐδέ",
    definition: "（連接詞）也不、甚至不 and not, not even, neither, nor<br>(οὐ + δέ)",
    frequency: 143
  },
  {
    greek: "οὐδείς, -δεμία, -δέν",
    definition: "沒(人、事物) no one, nothing<br>(ου[δε] + εν/μια-)",
    frequency: 234
  },
  {
    greek: "οὖν",
    definition: "（連接詞）所以、那麼、就 therefore, so, then<br>Postpositive",
    frequency: 499
  },
  {
    greek: "οὐρανός, ὁ, -οῦ",
    definition: "天 heaven, sky<br>(ουρανο-, Uranus = 天神)",
    frequency: 273
  },
  {
    greek: "οὔτε",
    definition: "（連接詞）也不 and not, neither, nor<br>(οὐ + τε)",
    frequency: 87
  },
  {
    greek: "οὗτος, αὕτη, τοῦτο",
    definition: "（指示代名詞）這 this<br>(ουτο/η-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/pronouns.html#Demonstrative' target='_blank'>詞形變化表</a>",
    frequency: 1388
  },
  {
    greek: "οὕτως",
    definition: "（副詞）如此、這樣 thus, so, in this manner",
    frequency: 208
  },
  {
    greek: "οὐχί",
    definition: "（否定）not<br>(這是 οὐκ 的強調拼法)",
    frequency: 54
  },
  {
    greek: "ὀφθαλμός, ὁ, -οῦ",
    definition: "眼睛 eye, sight<br>(οφθαλμο-, ophthalmology = 眼科)",
    frequency: 100
  },
  {
    greek: "ὄχλος, ὁ, -ου",
    definition: "群眾 crowd, multitude<br>(οχλο-, ochlocracy = 暴民政治)",
    frequency: 175
  },
  {
    greek: "παιδίον, τό, -ου",
    definition: "小孩 child, infant<br>(παιδιο-, pedagogy = 教學法)",
    frequency: 52
  },
  {
    greek: "πάλιν",
    definition: "（副詞）又、再 again",
    frequency: 141
  },
  {
    greek: "παρά (παρ')",
    definition: "（介繫詞）gen: from (the side of) 從⋯之旁<br>dat: beside, with, in the presence of 在⋯之旁<br>acc: alongside of 沿⋯之旁",
    frequency: 194
  },
  {
    greek: "παραβολή, ἡ, -ῆς",
    definition: "比喻 parable<br>(παραβολη-)",
    frequency: 50
  },
  {
    greek: "παραδίδωμι",
    definition: "交付 I entrust, deliver over<br>(παρα + δο-)<br>παραδώσω, παρέδωκα, παραδέδωκα, παραδέδομαι, παρεδόθην, (παρεδίδουν)",
    frequency: 119
  },
  {
    greek: "παρακαλέω",
    definition: "勸勉、安慰 I urge, exhort, comfort<br>(παρα + καλεϝ-, Paraclete = 保惠師)<br>παρακαλέσω, παρεκάλεσα, παρακέκληκα, παρακέκλημαι, παρεκλήθην, (παρεκάλουν)",
    frequency: 109
  },
  {
    greek: "πᾶς, πᾶσα, πᾶν",
    definition: "每、凡、所有、一切的 every, all<br>(παντ/πασα-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/adj313.html#3-1-3' target='_blank'>詞形變化表</a>",
    frequency: 1244
  },
  {
    greek: "πατήρ, ὁ, πατρός",
    definition: "父親、祖先 father, ancestor<br>(πατερ-, patriarch = 族長)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/3declension.html#Syncopated' target='_blank'>詞形變化表</a>",
    frequency: 413
  },
  {
    greek: "Παῦλος, ὁ, -ου",
    definition: "保羅 Paul",
    frequency: 158
  },
  {
    greek: "πείθω",
    definition: "說服、深信 I persuade, trust<br>(πειθ-)<br>πείσω, ἔπεισα, πέποιθα, πέπεισμαι, ἐπείσθην, (ἔπειθον)",
    frequency: 52
  },
  {
    greek: "πέμπω",
    definition: "打發、差遣 I send<br>(πεμπ-)<br>πέμψω, ἔπεμψα, -, -, ἐπέμφθην",
    frequency: 79
  },
  {
    greek: "περί",
    definition: "（介繫詞）gen: concerning, about 關於⋯<br>acc: around 在⋯周圍、大約<br>(perimeter = 圓周)",
    frequency: 333
  },
  {
    greek: "περιπατέω",
    definition: "走、行 I walk (around), live<br>(περι + πατε-)<br>περιπατήσω, περιεπάτησα, -, -, περιεπατήθην, (περιεπάτουν)",
    frequency: 95
  },
  {
    greek: "Πέτρος, ὁ, -ου",
    definition: "彼得 Peter",
    frequency: 156
  },
  {
    greek: "Πιλᾶτος, ὁ, -ου",
    definition: "彼拉多 Pilate",
    frequency: 55
  },
  {
    greek: "πίνω",
    definition: "喝 I drink<br>(πι-)<br>πίομαι, ἔπιον, πέπωκα, -, ἐπόθην, (ἔπινον)",
    frequency: 73
  },
  {
    greek: "πίπτω",
    definition: "跌落 I fall<br>(πετ-)<br>πεσοῦμαι, ἔπεσον (or ἔπεσα), πέπτωκα, -, -, (ἔπιπτον)",
    frequency: 90
  },
  {
    greek: "πιστεύω",
    definition: "相信、交託 I believe, trust, entrust<br>(πιστευ-)<br>πιστεύσω, ἐπίστευσα, πεπίστευκα, πεπίστευμαι, ἐπιστεύθην, (ἐπίστευον)",
    frequency: 241
  },
  {
    greek: "πίστις, ἡ, πίστεως",
    definition: "信心、信實、信仰 faith, faithfulness, belief<br>(πιστι-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/3declension.html#VowelStem' target='_blank'>詞形變化表</a>",
    frequency: 243
  },
  {
    greek: "πιστός, -ή, -όν",
    definition: "信實、可信、相信的 faithful, trustworthy, believing<br>(πιστο/η-)",
    frequency: 67
  },
  {
    greek: "πλείων, πλεῖον",
    definition: "更多的 larger, more (πλειον-, 55, πολύς的比較級, pleonasm = 贅語)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/adj313.html#3-3' target='_blank'>3-3形容詞</a>詞形變化表",
    frequency: 55
  },
  {
    greek: "πληρόω",
    definition: "充滿、完成、應驗 I fill, complete, fulfill<br>(πληρο-)<br>πληρώσω, ἐπλήρωσα, πεπλήρωκα, πεπλήρωμαι, ἐπληρώθην, (ἐπλήρουν)",
    frequency: 86
  },
  {
    greek: "πλοῖον, τό, -ου",
    definition: "船 ship, boat<br>(πλοιο-)",
    frequency: 68
  },
  {
    greek: "πνεῦμα, τό, -ατος",
    definition: "靈、風、氣 spirit, wind, breath<br>(πνευματ-, pneumatology = 聖靈論)",
    frequency: 379
  },
  {
    greek: "ποιέω",
    definition: "做、行 I do, make<br>(ποιε-, poem = [所做的]詩)<br>ποιήσω, ἐποίησα, πεποίηκα, πεποίημαι, ἐποιήθην, (ἐποίουν)",
    frequency: 568
  },
  {
    greek: "πόλις, ἡ, -εως",
    definition: "城邑 city<br>(πολι-, metropolis = \"mother-city\" 中心都市)",
    frequency: 162
  },
  {
    greek: "πολύς, πολλή, πολύ",
    definition: "多 much, many<br>(πολλο/η-, πολυ-, polygamy = 一夫多妻制)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/adj212.html#Irregular' target='_blank'>詞形變化表</a>",
    frequency: 416
  },
  {
    greek: "πονηρός, -ά, -όν",
    definition: "邪惡的 evil, bad<br>(πονηρο/α-)",
    frequency: 78
  },
  {
    greek: "πορεύομαι",
    definition: "去、行 I go, proceed, live<br>(πορευ-)<br>πορεύσομαι, -, -, πεπόρευμαι, ἐπορεύθην, (ἐπορευόμην)",
    frequency: 153
  },
  {
    greek: "πούς, ὁ, ποδός",
    definition: "腳 foot<br>(ποδ-, podiatrist = 足科醫生)",
    frequency: 93
  },
  {
    greek: "πρεσβύτερος, -α, -ον",
    definition: "（名詞）長老 elder<br>（形容詞）年長的 older<br>(πρεσβυτερο/α-, Presbytery = 長老制)",
    frequency: 66
  },
  {
    greek: "πρός",
    definition: "（介繫詞）acc: to, towards, with 向⋯、往⋯那裡<br>(proselyte =「進猶太教的人」徒二10)",
    frequency: 700
  },
  {
    greek: "προσέρχομαι",
    definition: "就近 I come/go to, approach<br>(προσ + ερχ/ελευθ-)<br>προσελεύσομαι, προσῆλθον, προσελήλυθα, -, -, (προσηρχόμην)",
    frequency: 86
  },
  {
    greek: "προσεύχομαι",
    definition: "禱告 I pray<br>(προσ + ευχ-)<br>προσεύξομαι, προσηυξάμην, -, -, -, (προσηυχόμην)",
    frequency: 85
  },
  {
    greek: "προσκυνέω",
    definition: "敬拜 I worship<br>(προσ + κυνε-)<br>προσκυνήσω, προσεκύνησα, -, -, -, (προσεκύνουν)",
    frequency: 60
  },
  {
    greek: "πρόσωπον, τό, -ου",
    definition: "臉 face<br>(προσωπο-)",
    frequency: 76
  },
  {
    greek: "προφήτης, ὁ, -ου",
    definition: "先知 prophet<br>(προφητη-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/12declension.html#1Dec' target='_blank'>詞形變化表</a>",
    frequency: 144
  },
  {
    greek: "πρῶτος, -η, -ον",
    definition: "第一的、先前的 first, earlier<br>(πρωτο/η-, prototype = 原型樣板)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/numerals.html' target='_blank'>數字表</a>",
    frequency: 155
  },
  {
    greek: "πῦρ, τό, πυρός",
    definition: "火 fire<br>(πυρ-, pyromaniac = 縱火狂)",
    frequency: 71
  },
  {
    greek: "πῶς",
    definition: "（副詞）如何 how? how!",
    frequency: 103
  },
  {
    greek: "ῥῆμα, τό, -ματος",
    definition: "話、事 word, saying, matter<br>(ρηματ-)",
    frequency: 68
  },
  {
    greek: "σάββατον, τό, -ου",
    definition: "安息日、週 Sabbath, week<br>(σαββατο-)",
    frequency: 68
  },
  {
    greek: "σάρξ, ἡ, σαρκός",
    definition: "肉體 flesh, body<br>(σαρκ-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/3declension.html#Mute' target='_blank'>詞形變化表</a>",
    frequency: 147
  },
  {
    greek: "σημεῖον, τό, -ου",
    definition: "記號、神蹟 sign, miracle<br>(σημειο-)",
    frequency: 77
  },
  {
    greek: "Σίμων, ὁ, -ωνος",
    definition: "西門 Simon",
    frequency: 75
  },
  {
    greek: "σοφία, ἡ, -ας",
    definition: "智慧 wisdom<br>(σοφια-, philosophy 哲學 = love of wisdom 喜愛智慧)",
    frequency: 51
  },
  {
    greek: "σπείρω",
    definition: "撒種 I sow<br>(σπερ-)<br>σπερῶ, ἔσπειρα, -, ἔσπαρμαι, ἐσπάρην",
    frequency: 52
  },
  {
    greek: "στόμα, τό, -ατος",
    definition: "口 mouth<br>(στοματ-)",
    frequency: 78
  },
  {
    greek: "σύ",
    definition: "（第二人稱代名詞）你 you (singular)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/pronouns.html#Personal' target='_blank'>詞形變化表</a>",
    frequency: 1069
  },
  {
    greek: "σύν",
    definition: "（介繫詞）dat: together with 與⋯一起",
    frequency: 128
  },
  {
    greek: "συνάγω",
    definition: "聚集 I gather together<br>(συν + αγ-, synagogue = 會堂)<br>συνάξω, συνήγαγον, -, συνῆγμαι, συνήχθην",
    frequency: 59
  },
  {
    greek: "συναγωγή, ἡ, -ῆς",
    definition: "會堂 synagogue, meeting<br>(συναγωγη-)",
    frequency: 56
  },
  {
    greek: "σῴζω",
    definition: "拯救 I save, deliver, rescue<br>(σωδ-, soteriology = 救贖論)<br>σώσω, ἔσωσα, σέσωκα, σέσῳσμαι, ἐσώθην, (ἔσῳζον)",
    frequency: 106
  },
  {
    greek: "σῶμα, τό, -ματος",
    definition: "身體 body<br>(σωματ-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Songs/soma_song.html' target='_blank'>身體歌[Soma Song]</a>",
    frequency: 142
  },
  {
    greek: "τε",
    definition: "（連接詞）及 and (so), so<br>Postpositive",
    frequency: 215
  },
  {
    greek: "τέκνον, τό, -ου",
    definition: "孩子、子孫 child, descendant<br>(τεκνο-)",
    frequency: 99
  },
  {
    greek: "τηρέω",
    definition: "遵守、保守 I keep, guard, observe<br>(τηρε-)<br>τηρήσω, ἐτήρησα, τετήρηκα, τετήρημαι, ἐτηρήθην, (ἐτήρουν)",
    frequency: 70
  },
  {
    greek: "τίθημι",
    definition: "放 I put, place<br>(θε-, thesis = 論文，提出論點)<br>θήσω, ἔθηκα, τέθεικα, τέθειμαι, ἐτέθην, (ἐτίθουν)",
    frequency: 100
  },
  {
    greek: "τις, τι",
    definition: "（不定代名詞）某、些、任何(人,事物) some, certain, anyone/thing<br>(τιν-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/pronouns.html#Indef' target='_blank'>詞形變化表</a>",
    frequency: 525
  },
  {
    greek: "τίς, τί",
    definition: "（疑問代名詞）誰、什麼、為什麼 who? what? which? why? how?<br>(τιν-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/pronouns.html#Indef' target='_blank'>詞形變化表</a>",
    frequency: 555
  },
  {
    greek: "τοιοῦτος, -αύτη, -οῦτον",
    definition: "（指示代名詞）這樣的 such, of such a kind<br>(τοιουτο/τοιαυτη-)",
    frequency: 57
  },
  {
    greek: "τόπος, ὁ, -ου",
    definition: "地方 place, location<br>(τοπο-, topography = 地形圖)",
    frequency: 94
  },
  {
    greek: "τότε",
    definition: "（副詞）然後、到時、就 then",
    frequency: 160
  },
  {
    greek: "τρεῖς, τριά",
    definition: "三 three<br>(τρεσ-, tricycle = 三輪車)<br>[3-3] 參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/numerals.html' target='_blank'>數字表</a>",
    frequency: 68
  },
  {
    greek: "τρίτος, -η, -ον",
    definition: "第三的 third<br>(τριτο/η-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/numerals.html' target='_blank'>數字表</a>",
    frequency: 56
  },
  {
    greek: "τυφλός, -ή, -όν",
    definition: "瞎的 blind<br>(τυφλο-, typhlosis = 視覺缺失)",
    frequency: 50
  },
  {
    greek: "ὕδωρ, τό, ὕδατος",
    definition: "水 water<br>(υδατ-, hydraulic ＝ 水力的)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/3declension.html#Irregular' target='_blank'>詞形變化表</a>",
    frequency: 76
  },
  {
    greek: "υἱός, ὁ, -οῦ",
    definition: "兒子、子孫 son<br>(υιο-)",
    frequency: 377
  },
  {
    greek: "ὑμεῖς",
    definition: "你們 you<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/pronouns.html#Personal' target='_blank'>第二人稱代名詞</a>詞形變化表",
    frequency: 1840
  },
  {
    greek: "ὑπάγω",
    definition: "離去 I depart<br>(υπ + αγ-)<br>ὑπάξω, ὑπήγαγον, -, ὑπῆγμαι, ὑπήχθην, (ὑπῆγον)",
    frequency: 79
  },
  {
    greek: "ὑπάρχω",
    definition: "是 I am, exist<br>(υπο + αρχ-)<br>ὑπάρξομαι, ὑπηρξάμην, -, -, -, (ὑπῆρχον)",
    frequency: 60
  },
  {
    greek: "ὑπέρ",
    definition: "（介繫詞）gen: in behalf of 為著<br>acc: above 在⋯之上<br>(hyperbole = 誇張筆法)",
    frequency: 150
  },
  {
    greek: "ὑπό (ὑπ', ὑφ')",
    definition: "（介繫詞）gen: by (person) 被<br>acc: under 在⋯之下<br>(hypodermic = 皮下注射)",
    frequency: 220
  },
  {
    greek: "Φαρισαῖος, ὁ, -ου",
    definition: "法利賽人 Pharisee<br>(Φαρισαιο-)",
    frequency: 98
  },
  {
    greek: "φέρω",
    definition: "帶來、拿來 I carry, bring<br>(φερ/οι/ενεχ-, Christopher = carrying Christ 背負基督)<br>οἴσω, ἤνεγκα, ἐνήνοχα, ἐνήνεγμαι, ἠνέχθην, (ἔφερον)",
    frequency: 66
  },
  {
    greek: "φημί",
    definition: "說 I say, affirm<br>(φε-, προφήτης = prophet 先知)<br>-, ἔφη, -, -, -, (ἔφη)",
    frequency: 66
  },
  {
    greek: "φοβέομαι",
    definition: "懼怕 I fear<br>(φοβε-, phobia = 恐懼症)<br>-, -, -, -, ἐφοβήθην, (ἐφοβούμην)",
    frequency: 95
  },
  {
    greek: "φωνή, ἡ, -ῆς",
    definition: "聲音 sound, voice<br>(φωνη-, phonograph = 留聲機)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/12declension.html#1Dec' target='_blank'>詞形變化表</a>",
    frequency: 139
  },
  {
    greek: "φῶς, τό, φωτός",
    definition: "光 light<br>(φωτ-, photogragh = 照片)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/3declension.html#Irregular' target='_blank'>詞形變化表</a>",
    frequency: 73
  },
  {
    greek: "χαίρω",
    definition: "喜樂 I rejoice<br>(χαρ-)<br>χαρήσομαι, -, -, -, ἐχάρην, (ἔχαιρον)",
    frequency: 74
  },
  {
    greek: "χαρά, ἡ, -ᾶς",
    definition: "喜樂 joy<br>(χαρα-)",
    frequency: 59
  },
  {
    greek: "χάρις, ἡ, χάριτος",
    definition: "恩典 grace, favor, kindness<br>(χαριτ-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/3declension.html#Mute' target='_blank'>詞形變化表</a>",
    frequency: 155
  },
  {
    greek: "χείρ, ἡ, χειρός",
    definition: "手 hand, arm, finger<br>(χειρ-)<br>參看<a href='https://www.chioulaoshi.org/BGreek/Paradigms/3declension.html#Liquid-r' target='_blank'>詞形變化表</a>",
    frequency: 177
  },
  {
    greek: "Χριστός, ὁ, οῦ",
    definition: "基督 Christ",
    frequency: 529
  },
  {
    greek: "χρόνος, ὁ, -ου",
    definition: "時間 time<br>(χρονο-, chronology = 年代表)",
    frequency: 54
  },
  {
    greek: "ψυχή, ἡ, -ῆς",
    definition: "魂、性命 soul, life<br>(ψυχη-, psychology = 心理學)",
    frequency: 103
  },
  {
    greek: "ὧδε",
    definition: "（副詞）在這裡 here",
    frequency: 61
  },
  {
    greek: "ὥρα, ἡ, -ας",
    definition: "時辰 hour, occasion, moment<br>(ωρα-)",
    frequency: 106
  },
  {
    greek: "ὡς",
    definition: "（連接詞）如同、當、如何 as, like, when, that, how<br>（副詞）大約 about, approximately",
    frequency: 504
  },
  {
    greek: "ὥστε",
    definition: "（連接詞）以致 therefore, so that<br>(ὡς + τε)",
    frequency: 83
  }
];
