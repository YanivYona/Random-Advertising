var singleWord = null;
var singleSlogan = null;
var fullSlogan = null;

var slogans =
    ["Adventure Starts with #" ,"Make # Great Again" ,"Think Big, Think #" ,"# is the Answer." ,"#, Love at First Sight" ,"Try the # Solution" ,
    "Learn to Dream with #." ,"Think for yourself, Think #." ,"Love your #" ,"Sex, Drugs and #" ,"#. For Happy Relationships." ,"#. A Name You Can Trust." ,
    "Work Hard, Play #." ,"There is Magic in #." ,"#. Building a Better World" ,"#. Designing your Future." ,"You Deserve #." ,"#. For a Better Future." ,
    "You are in Good Hands with #." ,"#. Making your Dreams Come True" ,"At # we See the Future." ,"# Makes Life Easier." ,"Let’s Make Magic Together. #." ,
    "# Powers Innovation." ,"#. Powered by Humans." ,"For a Better Future, you Need #." ,"#. The People Behind the Magic." ,"#. Getting Things Done." ,
    "Nothing Feels Great Like #." ,"#, Going that Extra Mile." ,"See How # Works for you" ,"Why not Give # a Try?" ,"Everything Looks Better with #." ,
    "# is for your Happiness." ,"# Will Make you Smile." ,"#. Bigger than Life." ,"#. No Questions Asked." ,"What Makes # So Great?" ,"#s Change Reality." ,
    "#. Just Buy it." ,"#. You Need it." ,"Probably the Best # in the World." ,"#. Say no More." ,"Try # today." ,"# is all you Need." ,"When Life is Hard, you Need #." ,
    "# Can Cure a Broken Heart." ,"#. Doing Good." ,"Are you Tired all the Time? Try #." ,"# Just Makes Sense." ,"#. When you Need a Change." ,"# Makes you Cool." ,
    "#. Make yourself Come True." ,"Feeling Down? It’s Time for #." ,"It’s Always Time for More #." ,"#. What are you Waiting for?" ,"#. I’m Loving it." ,
    "#. Just Do it." ,"The # Side of Life." ,"#... Make Good Things Better." ,"How About #?" ,"#. Can’t Beat That Feeling." ,"# Will Set you Free." ,
    "It’s # Time." ,"#. Simply Good." ,"#. Made with Love." ,"It’s New. It’s Fresh. It’s #." ,"Good Times. Good #." ,"#. Better than Friends." ,
    "#. Because you’re Awesome." ,"You Want #." ,"All Your Friends Have #." ,"# Can Help" ,"#. Can’t Get Enough." ,"Got #?" ,"#. Love it." ,"Any Day is # Day." ,
    "Get More # in You" ,"The Joy of #." ,"For the Love of #." ,"#. Love Yourself." ,"Let’s get Some #." ,"#. Best with Friends." ,"Catch That # Spirit." ,
    "# is Where the Heart is" ,"# Will Make you Smile" ,"The Future is Bright. The Future is #." ,"#. Does What it Says." ,"You Can Be Sure of #." ,
    "#. Every Little Helps." ,"#. Be all you Can Be." ,"#. Think Big." ,"# is Forever." ,"#. Life’s Good." ,"# Inside." ,"# = Love" ,"#. Hand Built by Robots." ,
    "Think. Feel. #." ,"#. It’s All Good." ,"Experience Life Through #." ,"Get #. Get Happiness." ,"# Can Do it." ,"#. Think Different." ,"Easy as #." ,
    "I think, Therefore I’m #." ,"Get in Touch with #." ,"#. Keep it Simple." ,"#. For Successful Living." ,"Everybody Loves #." ,"#. What you Crave" ,
    "#, so Good!" ,"My Life. My #." ,"Dreaming About #." ,"# Gives you Everything." ,"Bring Out the #." ,"Everyone Should Have #." ,"Take a Walk on the # Side." ,
    "# Is Hard to Find." ,"#, it's all the Rage." ,"God Bless #." ,"Buy # and Be Happy." ,"Get # On your Side." ,"Be One with the #." ];

var words = ['people', 'Man', 'child', 'work', 'life', 'woman', 'party', 'school', 'family', 'business', 'home', 'money', 'ideas', 'Friends', 'authority', 'war', 'mom', 'society', 'community', 'Education', 'girl', 'Father', 'force', 'decision', 'class', 'mind', 'Death', 'team', 'experience', 'boys', 'food', 'art', 'wife', 'relationship', 'nature', 'bed', 'computer', 'Trump', 'leaders', 'colour', 'future', 'animal', 'heart', 'love', 'music', 'knowledge', 'environment', 'thoughts', 'space', 'choice', 'individuality', 'technology', 'Energy', 'Lady', 'science', 'college', 'feeling', 'Army', 'dog', 'baby', 'profit', 'attitude', 'drugs', 'culture', 'memory', 'TV', 'objects', 'career', 'fear', 'sex', 'crime', 'eating', 'peace', 'sport', 'failure', 'marriage', 'spirituality', 'strength', 'Cash', 'Hope', 'vote', 'exercise', 'play', 'belief', 'reality', 'the weekend', 'confidence', 'commitment', 'drink', 'coffee', 'tradition', 'improvement', 'freedom', 'bed', 'acid', 'silence', 'faith', 'religion', 'living', 'creature', 'Empire', 'focus', 'purchase', 'sleeping', 'beer', 'drama', 'muscle', 'soul', 'sugar', 'philosophy', 'possession', 'spending', 'awareness', 'cigarette', 'secret', 'wedding', 'American', 'dancing', 'dealer', 'discovery', 'emotion', 'furniture', 'intelligence', 'retirement', 'routine', 'substance', 'anger', 'birthday', 'darkness', 'Hero', 'infection', 'interaction', 'medicine', 'chemical', 'consumption', 'human', 'anxiety', 'luck', 'alcohol', 'Heaven', 'prayer', 'enthusiasm', 'princess', 'satisfaction', 'talent', 'lover', 'shopping', 'imagination', 'mystery', 'excitement', 'joy', 'pride', 'universe', 'consciousness', 'cow', 'mummy', 'Passion', 'chicken', 'evolution', 'pig', 'potato', 'Depression', 'destruction', 'friendship', 'sympathy', 'wonder', 'ambition', 'entertainment', 'logic', 'daddy', 'Jew', 'running', 'Bible', 'myth', 'Rebel', 'therapy', 'adventure', 'triumph', 'capitalism', 'crack', 'fantasy', 'juice', 'sandwich', 'shit', 'Sin', 'whisky', 'liberation', 'teenager', 'Weed', 'Heroin', 'Cocaine', 'Sex', 'Unicorn', 'Love', 'Cheating', 'Drinking', 'Burger', 'Pizza', 'solar', 'israel', 'palestine'];

var icons ={"consciousness": "https://d30y9cdsu7xlg0.cloudfront.net/png/427599-200.png", "money": "https://d30y9cdsu7xlg0.cloudfront.net/png/931-200.png", "ambition": "https://d30y9cdsu7xlg0.cloudfront.net/png/1267947-200.png", "focus": "https://d30y9cdsu7xlg0.cloudfront.net/png/55113-200.png", "attitude": "https://d30y9cdsu7xlg0.cloudfront.net/png/1173991-200.png", "bible": "https://d30y9cdsu7xlg0.cloudfront.net/png/6749-200.png", "human": "https://d30y9cdsu7xlg0.cloudfront.net/png/103510-200.png", "fear": "https://d30y9cdsu7xlg0.cloudfront.net/png/86004-200.png", "death": "https://d30y9cdsu7xlg0.cloudfront.net/png/3725-200.png", "knowledge": "https://d30y9cdsu7xlg0.cloudfront.net/png/26356-200.png", "tv": "https://d30y9cdsu7xlg0.cloudfront.net/png/99975-200.png", "father": "https://d30y9cdsu7xlg0.cloudfront.net/png/12434-200.png", "crime": "https://d30y9cdsu7xlg0.cloudfront.net/png/8847-200.png", "environment": "https://d30y9cdsu7xlg0.cloudfront.net/png/4223-200.png", "spirituality": "https://d30y9cdsu7xlg0.cloudfront.net/png/2363-200.png", "teenager": "https://d30y9cdsu7xlg0.cloudfront.net/png/518260-200.png", "crack": "https://d30y9cdsu7xlg0.cloudfront.net/png/240533-200.png", "enthusiasm": "https://d30y9cdsu7xlg0.cloudfront.net/png/1040565-200.png", "pride": "https://d30y9cdsu7xlg0.cloudfront.net/png/112428-200.png", "hope": "https://d30y9cdsu7xlg0.cloudfront.net/png/26346-200.png", "coffee": "https://d30y9cdsu7xlg0.cloudfront.net/png/16-200.png", "woman": "https://d30y9cdsu7xlg0.cloudfront.net/png/5-200.png", "myth": "https://d30y9cdsu7xlg0.cloudfront.net/png/1011-200.png", "food": "https://d30y9cdsu7xlg0.cloudfront.net/png/4312-200.png", "evolution": "https://d30y9cdsu7xlg0.cloudfront.net/png/3985-200.png", "choice": "https://d30y9cdsu7xlg0.cloudfront.net/png/86701-200.png", "therapy": "https://d30y9cdsu7xlg0.cloudfront.net/png/60432-200.png", "mom": "https://d30y9cdsu7xlg0.cloudfront.net/png/63384-200.png", "wedding": "https://d30y9cdsu7xlg0.cloudfront.net/png/3716-200.png", "drinking": "https://d30y9cdsu7xlg0.cloudfront.net/png/84620-200.png", "lady": "https://d30y9cdsu7xlg0.cloudfront.net/png/136719-200.png", "hero": "https://d30y9cdsu7xlg0.cloudfront.net/png/97577-200.png", "furniture": "https://d30y9cdsu7xlg0.cloudfront.net/png/111323-200.png", "mystery": "https://d30y9cdsu7xlg0.cloudfront.net/png/757135-200.png", "school": "https://d30y9cdsu7xlg0.cloudfront.net/png/2401-200.png", "heaven": "https://d30y9cdsu7xlg0.cloudfront.net/png/6766-200.png", "fantasy": "https://d30y9cdsu7xlg0.cloudfront.net/png/672024-200.png", "team": "https://d30y9cdsu7xlg0.cloudfront.net/png/1016-200.png", "pizza": "https://d30y9cdsu7xlg0.cloudfront.net/png/152-200.png", "friendship": "https://d30y9cdsu7xlg0.cloudfront.net/png/70127-200.png", "liberation": "https://d30y9cdsu7xlg0.cloudfront.net/png/20475-200.png", "triumph": "https://d30y9cdsu7xlg0.cloudfront.net/png/24598-200.png", "luck": "https://d30y9cdsu7xlg0.cloudfront.net/png/101030-200.png", "work": "https://d30y9cdsu7xlg0.cloudfront.net/png/19157-200.png", "force": "https://d30y9cdsu7xlg0.cloudfront.net/png/1127-200.png", "leaders": "https://d30y9cdsu7xlg0.cloudfront.net/png/186478-200.png", "people": "https://d30y9cdsu7xlg0.cloudfront.net/png/2300-200.png", "intelligence": "https://d30y9cdsu7xlg0.cloudfront.net/png/26352-200.png", "energy": "https://d30y9cdsu7xlg0.cloudfront.net/png/478-200.png", "authority": "https://d30y9cdsu7xlg0.cloudfront.net/png/287729-200.png", "sex": "https://d30y9cdsu7xlg0.cloudfront.net/png/14484-200.png", "society": "https://d30y9cdsu7xlg0.cloudfront.net/png/1569-200.png", "computer": "https://d30y9cdsu7xlg0.cloudfront.net/png/115-200.png", "college": "https://d30y9cdsu7xlg0.cloudfront.net/png/2402-200.png", "home": "https://d30y9cdsu7xlg0.cloudfront.net/png/293-200.png", "girl": "https://d30y9cdsu7xlg0.cloudfront.net/png/2310-200.png", "sport": "https://d30y9cdsu7xlg0.cloudfront.net/png/358881-200.png", "chicken": "https://d30y9cdsu7xlg0.cloudfront.net/png/2123-200.png", "depression": "https://d30y9cdsu7xlg0.cloudfront.net/png/16722-200.png", "wonder": "https://d30y9cdsu7xlg0.cloudfront.net/png/342652-200.png", "juice": "https://d30y9cdsu7xlg0.cloudfront.net/png/15828-200.png", "living": "https://d30y9cdsu7xlg0.cloudfront.net/png/12236-200.png", "cocaine": "https://d30y9cdsu7xlg0.cloudfront.net/png/55231-200.png", "darkness": "https://d30y9cdsu7xlg0.cloudfront.net/png/411934-200.png", "space": "https://d30y9cdsu7xlg0.cloudfront.net/png/198338-200.png", "profit": "https://d30y9cdsu7xlg0.cloudfront.net/png/3245-200.png", "decision": "https://d30y9cdsu7xlg0.cloudfront.net/png/157536-200.png", "daddy": "https://d30y9cdsu7xlg0.cloudfront.net/png/17006-200.png", "religion": "https://d30y9cdsu7xlg0.cloudfront.net/png/2353-200.png", "passion": "https://d30y9cdsu7xlg0.cloudfront.net/png/85877-200.png", "routine": "https://d30y9cdsu7xlg0.cloudfront.net/png/1211775-200.png", "medicine": "https://d30y9cdsu7xlg0.cloudfront.net/png/3811-200.png", "exercise": "https://d30y9cdsu7xlg0.cloudfront.net/png/318-200.png", "discovery": "https://d30y9cdsu7xlg0.cloudfront.net/png/1293500-200.png", "philosophy": "https://d30y9cdsu7xlg0.cloudfront.net/png/111963-200.png", "eating": "https://d30y9cdsu7xlg0.cloudfront.net/png/76277-200.png", "belief": "https://d30y9cdsu7xlg0.cloudfront.net/png/2349-200.png", "business": "https://d30y9cdsu7xlg0.cloudfront.net/png/38242-200.png", "nature": "https://d30y9cdsu7xlg0.cloudfront.net/png/60745-200.png", "dealer": "https://d30y9cdsu7xlg0.cloudfront.net/png/688826-200.png", "joy": "https://d30y9cdsu7xlg0.cloudfront.net/png/154219-200.png", "objects": "https://d30y9cdsu7xlg0.cloudfront.net/png/120397-200.png", "rebel": "https://d30y9cdsu7xlg0.cloudfront.net/png/4295-200.png", "princess": "https://d30y9cdsu7xlg0.cloudfront.net/png/76302-200.png", "faith": "https://d30y9cdsu7xlg0.cloudfront.net/png/284616-200.png", "substance": "https://d30y9cdsu7xlg0.cloudfront.net/png/1251875-200.png", "talent": "https://d30y9cdsu7xlg0.cloudfront.net/png/649048-200.png", "cow": "https://d30y9cdsu7xlg0.cloudfront.net/png/1325-200.png", "career": "https://d30y9cdsu7xlg0.cloudfront.net/png/199301-200.png", "freedom": "https://d30y9cdsu7xlg0.cloudfront.net/png/26343-200.png", "experience": "https://d30y9cdsu7xlg0.cloudfront.net/png/72585-200.png", "drama": "https://d30y9cdsu7xlg0.cloudfront.net/png/60742-200.png", "alcohol": "https://d30y9cdsu7xlg0.cloudfront.net/png/1716-200.png", "american": "https://d30y9cdsu7xlg0.cloudfront.net/png/589998-200.png", "heroin": "https://d30y9cdsu7xlg0.cloudfront.net/png/439952-200.png", "logic": "https://d30y9cdsu7xlg0.cloudfront.net/png/718608-200.png", "silence": "https://d30y9cdsu7xlg0.cloudfront.net/png/1585-200.png", "emotion": "https://d30y9cdsu7xlg0.cloudfront.net/png/137783-200.png", "love": "https://d30y9cdsu7xlg0.cloudfront.net/png/113-200.png", "potato": "https://d30y9cdsu7xlg0.cloudfront.net/png/26079-200.png", "family": "https://d30y9cdsu7xlg0.cloudfront.net/png/8199-200.png", "commitment": "https://d30y9cdsu7xlg0.cloudfront.net/png/26327-200.png", "community": "https://d30y9cdsu7xlg0.cloudfront.net/png/288-200.png", "satisfaction": "https://d30y9cdsu7xlg0.cloudfront.net/png/967931-200.png", "sympathy": "https://d30y9cdsu7xlg0.cloudfront.net/png/9396-200.png", "soul": "https://d30y9cdsu7xlg0.cloudfront.net/png/38674-200.png", "vote": "https://d30y9cdsu7xlg0.cloudfront.net/png/7236-200.png", "art": "https://d30y9cdsu7xlg0.cloudfront.net/png/33010-200.png", "improvement": "https://d30y9cdsu7xlg0.cloudfront.net/png/511234-200.png", "confidence": "https://d30y9cdsu7xlg0.cloudfront.net/png/1172566-200.png", "cheating": "https://d30y9cdsu7xlg0.cloudfront.net/png/10395-200.png", "jew": "https://d30y9cdsu7xlg0.cloudfront.net/png/6015-200.png", "consumption": "https://d30y9cdsu7xlg0.cloudfront.net/png/42433-200.png", "army": "https://d30y9cdsu7xlg0.cloudfront.net/png/199815-200.png", "spending": "https://d30y9cdsu7xlg0.cloudfront.net/png/405178-200.png", "friends": "https://d30y9cdsu7xlg0.cloudfront.net/png/3359-200.png", "secret": "https://d30y9cdsu7xlg0.cloudfront.net/png/71679-200.png", "tradition": "https://d30y9cdsu7xlg0.cloudfront.net/png/1388-200.png", "beer": "https://d30y9cdsu7xlg0.cloudfront.net/png/593-200.png", "music": "https://d30y9cdsu7xlg0.cloudfront.net/png/111-200.png", "memory": "https://d30y9cdsu7xlg0.cloudfront.net/png/870-200.png", "palestine": "https://d30y9cdsu7xlg0.cloudfront.net/png/226100-200.png", "destruction": "https://d30y9cdsu7xlg0.cloudfront.net/png/952816-200.png", "war": "https://d30y9cdsu7xlg0.cloudfront.net/png/332702-200.png", "possession": "https://d30y9cdsu7xlg0.cloudfront.net/png/44024-200.png", "life": "https://d30y9cdsu7xlg0.cloudfront.net/png/84835-200.png", "shopping": "https://d30y9cdsu7xlg0.cloudfront.net/png/17962-200.png", "relationship": "https://d30y9cdsu7xlg0.cloudfront.net/png/41782-200.png", "drugs": "https://d30y9cdsu7xlg0.cloudfront.net/png/21187-200.png", "universe": "https://d30y9cdsu7xlg0.cloudfront.net/png/50497-200.png", "infection": "https://d30y9cdsu7xlg0.cloudfront.net/png/137620-200.png", "failure": "https://d30y9cdsu7xlg0.cloudfront.net/png/882793-200.png", "interaction": "https://d30y9cdsu7xlg0.cloudfront.net/png/110873-200.png", "solar": "https://d30y9cdsu7xlg0.cloudfront.net/png/69352-200.png", "child": "https://d30y9cdsu7xlg0.cloudfront.net/png/7520-200.png", "baby": "https://d30y9cdsu7xlg0.cloudfront.net/png/47-200.png", "pig": "https://d30y9cdsu7xlg0.cloudfront.net/png/1575-200.png", "whisky": "https://d30y9cdsu7xlg0.cloudfront.net/png/7964-200.png", "anxiety": "https://d30y9cdsu7xlg0.cloudfront.net/png/15609-200.png", "culture": "https://d30y9cdsu7xlg0.cloudfront.net/png/568858-200.png", "science": "https://d30y9cdsu7xlg0.cloudfront.net/png/62984-200.png", "wife": "https://d30y9cdsu7xlg0.cloudfront.net/png/1194956-200.png", "cash": "https://d30y9cdsu7xlg0.cloudfront.net/png/38038-200.png", "bed": "https://d30y9cdsu7xlg0.cloudfront.net/png/1072-200.png", "excitement": "https://d30y9cdsu7xlg0.cloudfront.net/png/267-200.png", "future": "https://d30y9cdsu7xlg0.cloudfront.net/png/29631-200.png", "marriage": "https://d30y9cdsu7xlg0.cloudfront.net/png/4940-200.png", "awareness": "https://d30y9cdsu7xlg0.cloudfront.net/png/30176-200.png", "lover": "https://d30y9cdsu7xlg0.cloudfront.net/png/12417-200.png", "feeling": "https://d30y9cdsu7xlg0.cloudfront.net/png/545660-200.png", "heart": "https://d30y9cdsu7xlg0.cloudfront.net/png/187-200.png", "individuality": "https://d30y9cdsu7xlg0.cloudfront.net/png/23463-200.png", "trump": "https://d30y9cdsu7xlg0.cloudfront.net/png/366725-200.png", "burger": "https://d30y9cdsu7xlg0.cloudfront.net/png/71698-200.png", "mind": "https://d30y9cdsu7xlg0.cloudfront.net/png/224552-200.png", "israel": "https://d30y9cdsu7xlg0.cloudfront.net/png/22316-200.png", "sleeping": "https://d30y9cdsu7xlg0.cloudfront.net/png/34167-200.png", "imagination": "https://d30y9cdsu7xlg0.cloudfront.net/png/1246403-200.png", "prayer": "https://d30y9cdsu7xlg0.cloudfront.net/png/1876-200.png", "anger": "https://d30y9cdsu7xlg0.cloudfront.net/png/6824-200.png", "education": "https://d30y9cdsu7xlg0.cloudfront.net/png/1567-200.png", "technology": "https://d30y9cdsu7xlg0.cloudfront.net/png/77536-200.png", "empire": "https://d30y9cdsu7xlg0.cloudfront.net/png/929304-200.png", "shit": "https://d30y9cdsu7xlg0.cloudfront.net/png/350289-200.png", "strength": "https://d30y9cdsu7xlg0.cloudfront.net/png/2671-200.png", "dancing": "https://d30y9cdsu7xlg0.cloudfront.net/png/18453-200.png", "sugar": "https://d30y9cdsu7xlg0.cloudfront.net/png/2335-200.png", "peace": "https://d30y9cdsu7xlg0.cloudfront.net/png/144-200.png", "ideas": "https://d30y9cdsu7xlg0.cloudfront.net/png/51152-200.png", "reality": "https://d30y9cdsu7xlg0.cloudfront.net/png/16261-200.png", "chemical": "https://d30y9cdsu7xlg0.cloudfront.net/png/23722-200.png", "animal": "https://d30y9cdsu7xlg0.cloudfront.net/png/545532-200.png", "party": "https://d30y9cdsu7xlg0.cloudfront.net/png/98497-200.png", "sin": "https://d30y9cdsu7xlg0.cloudfront.net/png/2999-200.png", "creature": "https://d30y9cdsu7xlg0.cloudfront.net/png/33252-200.png", "play": "https://d30y9cdsu7xlg0.cloudfront.net/png/1541-200.png", "sandwich": "https://d30y9cdsu7xlg0.cloudfront.net/png/2498-200.png", "drink": "https://d30y9cdsu7xlg0.cloudfront.net/png/2578-200.png", "weed": "https://d30y9cdsu7xlg0.cloudfront.net/png/140097-200.png", "cigarette": "https://d30y9cdsu7xlg0.cloudfront.net/png/11818-200.png", "running": "https://d30y9cdsu7xlg0.cloudfront.net/png/246-200.png", "birthday": "https://d30y9cdsu7xlg0.cloudfront.net/png/62562-200.png", "adventure": "https://d30y9cdsu7xlg0.cloudfront.net/png/60740-200.png", "unicorn": "https://d30y9cdsu7xlg0.cloudfront.net/png/3364-200.png", "weekend": "https://d30y9cdsu7xlg0.cloudfront.net/png/487230-200.png", "class": "https://d30y9cdsu7xlg0.cloudfront.net/png/101172-200.png", "thoughts": "https://d30y9cdsu7xlg0.cloudfront.net/png/230188-200.png", "man": "https://d30y9cdsu7xlg0.cloudfront.net/png/2-200.png", "purchase": "https://d30y9cdsu7xlg0.cloudfront.net/png/29592-200.png", "retirement": "https://d30y9cdsu7xlg0.cloudfront.net/png/43056-200.png", "boys": "https://d30y9cdsu7xlg0.cloudfront.net/png/21997-200.png", "colour": "https://d30y9cdsu7xlg0.cloudfront.net/png/659416-200.png", "entertainment": "https://d30y9cdsu7xlg0.cloudfront.net/png/57685-200.png", "dog": "https://d30y9cdsu7xlg0.cloudfront.net/png/364-200.png", "capitalism": "https://d30y9cdsu7xlg0.cloudfront.net/png/83620-200.png", "mummy": "https://d30y9cdsu7xlg0.cloudfront.net/png/706-200.png", "acid": "https://d30y9cdsu7xlg0.cloudfront.net/png/55760-200.png", "muscle": "https://d30y9cdsu7xlg0.cloudfront.net/png/15255-200.png"};


function PickRandomCSS(){
	document.getElementById("PickCSS").href = "css/layout" + Math.floor(Math.random() * 14 + 1 ) + ".css";
//  document.getElementById("PickCSS").href = "css/layout1.css";
}

function CreateSingleWord(){
  var url = new URL(location.href);
  var key = url.searchParams.get("Keyword");

  if (key === null || key === "" || key === " ")
    return getRandomWord();

  else
  {
      window.history.pushState({}, document.title, "grids.html");
      return key;
  }
}


function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)];
}


function CreateSingleSlogan(slogans){
    return slogans[Math.floor(Math.random() * slogans.length)];
}


function CreateFullSlogan(singleWord, singleSlogan){
	return singleSlogan.replace("#", singleWord);
}


function ShowSingleWord(singleWord){
	document.getElementById("showWord").innerHTML = singleWord ;
}


function ShowFullSlogan(fullSlogan){
	document.getElementById("showSlogan").innerHTML = fullSlogan ;
}


function PickRandomPhoto(keyword){
  var url = "getImage.php"
  $.getJSON(url,{k:keyword},function(data){
      if (data.status === 200) PutPhoto(data.url,keyword);
      else if (data.status === 402) alert("50+ in an hour");
 	  else alert("NOTHING FOUND");
  });
}


function PutPhoto(url,word){
  var photo = new Image();
  $(photo).on('load',function(){
    $("#showPic").attr("src",url);
    singleSlogan = CreateSingleSlogan(slogans);
    fullSlogan = CreateFullSlogan(word, singleSlogan);
    ShowFullSlogan(fullSlogan);
    PickRandomContent();
    PickRandomCSS();
    ShowSingleWord(word);
    getIcon(word);
  });
  photo.src = url;
}


function init(){
  singleWord = CreateSingleWord();
  PickRandomPhoto(singleWord);
  setTimeout(function() { init(); }, 90000);
}

function getIcon(word){
    if (icons.hasOwnProperty(word.toLowerCase()))
    PickRandomLogo(icons[word.toLowerCase()]);

    else
 	return getIcon(getRandomWord());
}


function PickRandomLogo(singleWord){
    document.getElementById("showLogo").src = singleWord;
}


function PickRandomContent(){
    $("document").ready(function() {
    function getNewQuote(){
        $.ajax({
    		url: 'https://api.forismatic.com/api/1.0/',
    	    jsonp: 'jsonp',
    	    dataType: 'jsonp',
    	    data: {
    	    	method: 'getQuote',
    	    	lang: 'en',
    	    	format: 'jsonp'
    	},
    	success: function(response) {
    	document.getElementById("showContent").innerHTML = response.quoteText;
    	}
    });
    }
    getNewQuote();
    });
}
init();
