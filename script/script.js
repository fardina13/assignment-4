let interviewList = [{name: 'card1'}];
let rejectedList = [];

let total = document.getElementById('total');
let interView = document.getElementById('interview');
let rejected = document.getElementById('rejected');

const allFilterBtn = document.getElementById('all-filter-btn');
const intFilterBtn = document.getElementById('int-filter-btn');
const rejFilterBtn = document.getElementById('rej-filter-btn');

const allCardSection = document.getElementById('all-card');

const mainContainer = document.querySelector('main')

function calculateCount(){
    total.innerText = allCardSection.children.length;
    interView.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}
calculateCount();

function toggleStyle(id){
    // removing bg gray for all
    allFilterBtn.classList.remove('bg-gray-200', 'text-[#64748b]');
    intFilterBtn.classList.remove('bg-gray-200', 'text-[#64748b]');
    rejFilterBtn.classList.remove('bg-gray-200', 'text-[#64748b]');

    // adding blue bg for all
    allFilterBtn.classList.add('bg-[#3b82f6]', 'text-white');
    intFilterBtn.classList.add('bg-[#3b82f6]', 'text-white');
    rejFilterBtn.classList.add('bg-[#3b82f6]', 'text-white');

    const selected = document.getElementById(id);
    // adding gray bg for current button
    selected.classList.remove('bg-[#3b82f6]', 'text-white');
    selected.classList.add('bg-gray-200', 'text-[#64748b]');
}

mainContainer.addEventListener('click', function(event){
    console.log(event.target.parentNode.parentNode);
})