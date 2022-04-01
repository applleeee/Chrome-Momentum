const quotes = [
    {quote : "열정없이 사느니 차라리 죽는게 낫다.",
    author : "Kurt Cobain"},
    {
        quote : "천사도 가기 두려워 하는 곳에 바보가 달려들다.",
        author : "Alexander Pope"
    },
    {
        quote : "가능해 보이는 것 혹은 타당해 보이는 것만 선택한다면 스스로가 진정 원하는 것을 알 수 없고 타협만이 남게 된다.",
        author : "Robert Fritz" 
    },
    {
        quote : "내가 꿈꾸는 것은 바로 균형의 예술이다.",
        author : "Henri Matisse"
    },
    {
        quote : "친구는 있다가도 없고, 없다가도 있을 수 있지만, 적은 계속 는다.",
        author : "Thomas Jones"
    },
    {
        quote : "친구가 어려울 때 돕기는 쉽지만, 당신의 시간을 친구에게 내주는게 항상 시의적절할 수는 없다.",
        author :"Charlie Chaplin" 
    },
    {
        quote : "명확히 설정된 목표가 없으면, 우리는 사소한 일상을 충실히 살다 결국 그 일상의 노예가 되고 만다.",
        author :"Robert Heinlein" 
    },
    {
        quote : "창조적인 삶을 살기 위해 우리는 잘못되는 것에 대한 두려움을 버려야 한다.",
        author :"Joseph Chilton Pearce" 
    },
    {
        quote : "우리가 경영이라고 부르는 것의 상당 부분은 직원들이 일하기 어렵게 만드는 것들로 구성되어 있다.",
        author :"Peter Drucker" 
    },
    {
        quote : "적을 용서해야 한다고 해서, 반드시 그를 신뢰해야 하는 것은 아니다.",
        author :"Thomas Fuller" 
    },




]

// 10개
const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todyasQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todyasQuote.quote;
author.innerText = todyasQuote.author; 