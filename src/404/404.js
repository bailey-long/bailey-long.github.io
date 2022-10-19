let facts = [
    "The first computer virus was created in 1983.",
    "Venus is the only planet that rotates clockwise.",
    "The first computer mouse was made of wood.",
    "Еще в пятнадцать (back in fifteen)",
    "A \"jiffy\" is an actual unit of time for 1/100th of a second.",
    "Snails can sleep up to three years.",
    "The only domestic animal not mentioned in the Bible is the cat.",
    "The average person spends 6 months of their life waiting on a red light to turn green.",
    "The average person falls asleep in seven minutes.",
    "The average person has over 1,460 dreams a year.",
    "The average person swallows 8 spiders in their lifetime at night.",
    "The average person laughs 15 times per day.",
    "The average person has two to three dreams every night.",
    "A cat's jaw cannot move sideways. (Probably why cats got left out of the Bible.)",
    "A cat has 32 muscles in each ear.",
    "A cat's nose pad is ridged with a unique pattern, just like the fingerprint of a human.",
    "A cat's urine glows under a black light.",
    "A cat can jump up to six times its length.",
    "A cat can't taste sweetness.",
    "A cat's brain is 90% similar to a human's — more similar than to a dog's.",
    "A cat has five toes on his front paws, and four on the back, unless he's a polydactyl.",
    "A cat's field of vision is about 185 degrees.",
    `"The longest name of a place still in use is a hill in New Zealand:
    Taumatawhakatangihangaoauauotameteaturipukakapikimaungahoronukupokaiwhenuakitanatahu—(that's 92 letters. I counted so you wouldn't have to. Obviously, mail envelopes in NZ are freaking HUGE!)"`,
    "Null is actually an object in javascript but not an instance of an object... yeah",
    "The pool on the titanic is still filled with water.",
    "You're breathtaking! You're all breathtaking! -Keanu Reeves",
    "if the northern elk was able to speak english , it would still never be able to say the word \"lasagna\" because of the way their oesophagus is shaped !",
    "3 in 4 people living In Australia make up 75% of the Australian population",
    "If you had 1 lasagne and put it on top of another lasagna, you would still have 1 lasagne.",
    "Only in truth, the Lords will abandon their thrones, and the Unkindled will rise. Nameless accursed undead, unfit even to be cinder. And so it is that ash seeketh embers...",
    "We are amidst strange beings, in a strange land.",
    "The way I see it, our fates appear to be intertwined.",
    "I found a new book which only tells the truth. It's called Facebook. I learn so many facts there",
    "Free rune armour trimming",
    "I have such sights to show you -Pinhead",
    "Sea Shanty 2",
    "Lobsters pee from their faces...",
    "The cookie monsters real name is Sid",

];

generateFact();

document.getElementsByClassName('generateFact')[0].onclick = function(){
    generateFact();
};
function generateFact(){
    var randomItem = facts[Math.floor(Math.random()*facts.length)];
    document.getElementsByClassName('randomFact')[0].innerHTML = randomItem;
}