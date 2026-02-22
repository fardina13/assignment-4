let interviewList = [];
let rejectedList = [];
let currentStatus = [];

let total = document.getElementById('total');
let interView = document.getElementById('interview');
let rejected = document.getElementById('rejected');

const allFilterBtn = document.getElementById('all-filter-btn');
const intFilterBtn = document.getElementById('int-filter-btn');
const rejFilterBtn = document.getElementById('rej-filter-btn');

const allCardSection = document.getElementById('all-card');

const mainContainer = document.querySelector('main');

const filterSection = document.getElementById('filtered-section');

function calculateCount(){
    total.innerText = allCardSection.children.length;
    interView.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}
calculateCount();

function toggleStyle(id){
    // adding blue bg for all
    allFilterBtn.classList.add('bg-gray-200', 'text-[#64748b]');
    intFilterBtn.classList.add('bg-gray-200', 'text-[#64748b]');
    rejFilterBtn.classList.add('bg-gray-200', 'text-[#64748b]');

    // removing bg gray for all
    allFilterBtn.classList.remove('bg-[#3b82f6]', 'text-[#3b82f6]');
    intFilterBtn.classList.remove('bg-[#3b82f6]', 'text-[#3b82f6]');
    rejFilterBtn.classList.remove('bg-[#3b82f6]', 'text-[#3b82f6]');

    const selected = document.getElementById(id);
    currentStatus = id;
    // adding gray bg for current button
    selected.classList.remove('bg-gray-200', 'text-[#64748b]');
    selected.classList.add('bg-[#3b82f6]', 'text-white');

    if(id == 'int-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    }
    else if(id == 'all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else if(id == 'rej-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejection();
    }
}

mainContainer.addEventListener('click', function(event){
    console.log(event.target.classList.contains('interview-btn'));
    if(event.target.classList.contains('interview-btn')){
        // console.log(event.target.parentNode.parentNode);
    const parentNode = event.target.parentNode.parentNode;
    const companyTitle = parentNode.querySelector('.companyTitle').innerText;
    const jobPost = parentNode.querySelector('.jobPost').innerText;
    const jobLocation = parentNode.querySelector('.jobLocation').innerText;
    const jobStatus = parentNode.querySelector('.jobStatus').innerText;
    const jobResponsibility = parentNode.querySelector('.jobResponsibility').innerText;
    parentNode.querySelector('.jobStatus').innerText = 'Interview';
    // console.log(companyTitle, jobPost, jobLocation, jobStatus, jobResponsibility);
    const cardInfo = {
        companyTitle,
        jobPost,
        jobLocation,
        jobStatus: 'Interview',
        jobResponsibility
    }
    // console.log(cardInfo);
    const jobExist = interviewList.find(item=> item.companyTitle == cardInfo.companyTitle);
    
    if(!jobExist){
        interviewList.push(cardInfo);
    }
    // console.log(interviewList);
    rejectedList = rejectedList.filter(item=> item.companyTitle != cardInfo.companyTitle);
    calculateCount();
    if(currentStatus == 'rej-filter-btn'){
        renderRejection();
    }
    
    }
    else if(event.target.classList.contains('rejected-btn')){
        // console.log(event.target.parentNode.parentNode);
    const parentNode = event.target.parentNode.parentNode;
    const companyTitle = parentNode.querySelector('.companyTitle').innerText;
    const jobPost = parentNode.querySelector('.jobPost').innerText;
    const jobLocation = parentNode.querySelector('.jobLocation').innerText;
    const jobStatus = parentNode.querySelector('.jobStatus').innerText;
    const jobResponsibility = parentNode.querySelector('.jobResponsibility').innerText;
    parentNode.querySelector('.jobStatus').innerText = 'Rejected';
    // console.log(companyTitle, jobPost, jobLocation, jobStatus, jobResponsibility);
    const cardInfo = {
        companyTitle,
        jobPost,
        jobLocation,
        jobStatus: 'Rejected',
        jobResponsibility
    }
    // console.log(cardInfo);
    const jobExist = rejectedList.find(item=> item.companyTitle == cardInfo.companyTitle);
    
    if(!jobExist){
        rejectedList.push(cardInfo);
    }
    // console.log(interviewList);
    interviewList = interviewList.filter(item=> item.companyTitle != cardInfo.companyTitle);
    if(currentStatus == 'int-filter-btn'){
        renderInterview();
    }
    calculateCount();
    }
    
})

function renderInterview(){
    filterSection.innerHTML = '';
    for(let interview of interviewList){
        console.log(interview);
        let div = document.createElement('div');
        div.className = 'flex justify-between rounded-md border border-gray-200 shadow-md p-6'
        div.innerHTML = `
          <div class="left">
                    <h3 class="companyTitle text-[18px] font-semibold text-[#002c5c]">${interview.companyTitle}</h3>
                           <p class="jobPost text-[16px] text-[#64748b]">React Native Developer</p>
                           <p class="jobLocation text-sm text-[#64748b] mt-5">Remote • Full-time • $130,000 - $175,000</p>
                           <p class="jobStatus text-[#002c5c] text-[14px] font-medium pt-5">${interview.jobStatus}</p>
                           <p class="jobResponsibility pt-2 text-sm text-[#323b49]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                               <div class="mt-5 flex gap-2">
                                   <button class="interview-btn rounded-md px-3 py-2 border-1 text-[#10B981] border-[#10B981] hover:bg-[#10B981] hover:text-white cursor-pointer">INTERVIEW</button>
                                   <button class="rejected-btn rounded-md px-3 py-2 border-1 text-[#EF4444] border-[#EF4444] hover:bg-[#EF4444] hover:text-white cursor-pointer" >REJECTED</button>
                               </div>
                </div>
                <div class="right">
                    <button class="btn-delete"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
        filterSection.appendChild(div);
    }
}
function renderRejection(){
    filterSection.innerHTML = '';
    for(let rejection of rejectedList){
        console.log(rejection);
        let div = document.createElement('div');
        div.className = 'flex justify-between rounded-md border border-gray-200 shadow-md p-6'
        div.innerHTML = `
          <div class="left">
                    <h3 class="companyTitle text-[18px] font-semibold text-[#002c5c]">${rejection.companyTitle}</h3>
                           <p class="jobPost text-[16px] text-[#64748b]">React Native Developer</p>
                           <p class="jobLocation text-sm text-[#64748b] mt-5">Remote • Full-time • $130,000 - $175,000</p>
                           <p class="jobStatus text-[#002c5c] text-[14px] font-medium pt-5">${rejection.jobStatus}</p>
                           <p class="jobResponsibility pt-2 text-sm text-[#323b49]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                               <div class="mt-5 flex gap-2">
                                   <button class="interview-btn rounded-md px-3 py-2 border-1 text-[#10B981] border-[#10B981] hover:bg-[#10B981] hover:text-white cursor-pointer">INTERVIEW</button>
                                   <button class="rejected-btn rounded-md px-3 py-2 border-1 text-[#EF4444] border-[#EF4444] hover:bg-[#EF4444] hover:text-white cursor-pointer" >REJECTED</button>
                               </div>
                </div>
                <div class="right">
                    <button class="btn-delete"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
        filterSection.appendChild(div);
    }
}