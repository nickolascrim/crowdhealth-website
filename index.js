// Membership Pricing Calculator

const subscription = 60;

const pricing = {
  "500": {
    under55: 140,
    over55: 280,
    family: 420
  },
  "15000": {
    under55: 25,
    over55: 50,
    family: 75
  }
};

document.getElementById("numMembers").addEventListener("input", calculateTotal);
document.getElementById("numOver55").addEventListener("input", calculateTotal);
document.getElementById("commitmentLevel").addEventListener("change", calculateTotal);

function getCommitmentLevel() {
  return document.getElementById("commitmentLevel").value;
}

function calculateSubscription() {
  const numMembers = parseInt(document.getElementById("numMembers").value) || 0;
  const totalSubscription = numMembers * subscription;
  document.getElementById("subscription").innerText = "$" + totalSubscription;

  document.getElementById("customPricing").style.display = numMembers >= 9 ? "flex" : "none";
}

function calculateContribution() {
  const numMembers = parseInt(document.getElementById("numMembers").value) || 0;
  const numOver55 = parseInt(document.getElementById("numOver55").value) || 0;
  const level = getCommitmentLevel();

  if (numOver55 > numMembers) {
    document.getElementById("contribution").innerText = "$0";
    document.getElementById("errorMessage").innerText = "Whoops! The number of 55+ can't be greater than the total number of signups.";
    return;
  } else {
    document.getElementById("errorMessage").innerText = "";
  }

  const numUnder55 = numMembers - numOver55;
  const plan = pricing[level];

  let totalContribution = 0;
  if (numMembers <= 3) {
    totalContribution = (numUnder55 * plan.under55) + (numOver55 * plan.over55);
  } else {
    totalContribution = plan.family;
  }

  document.getElementById("contribution").innerText = "$" + totalContribution;
}

function calculateTotal() {
  calculateSubscription();
  calculateContribution();

  const subscription = parseFloat(document.getElementById("subscription").innerText.replace("$", "")) || 0;
  const contribution = parseFloat(document.getElementById("contribution").innerText.replace("$", "")) || 0;

  document.getElementById("total").innerText = "$" + (subscription + contribution);
}

function isCalculatorTalkButton(element) {
  const button = element.closest("button, a");
  if (!button) return null;

  const text = button.textContent.replace(/\s+/g, " ").trim().toLowerCase();
  const inlineClick = button.getAttribute("onclick") || "";
  const href = button.getAttribute("href") || "";
  const opensContactPage = inlineClick.indexOf("joincrowdhealth.com/contact") !== -1 || href.indexOf("/contact") !== -1;
  const isTalkButton = text === "talk to an expert" || text === "talk to us";

  return opensContactPage && isTalkButton ? button : null;
}

function findSchedulerModalTrigger(excludedButton) {
  const triggers = document.querySelectorAll('a[href="#"][data-w-id]');

  for (let i = 0; i < triggers.length; i += 1) {
    const trigger = triggers[i];
    const text = trigger.textContent.replace(/\s+/g, " ").trim().toLowerCase();

    if (trigger !== excludedButton && (text === "talk to an expert" || text === "talk to us")) {
      return trigger;
    }
  }

  return null;
}

function setupCalculatorSchedulerModalBridge() {
  document.addEventListener("click", function(event) {
    const calculatorTalkButton = isCalculatorTalkButton(event.target);
    if (!calculatorTalkButton) return;

    const schedulerTrigger = findSchedulerModalTrigger(calculatorTalkButton);
    if (!schedulerTrigger) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    schedulerTrigger.click();
  }, true);
}

setupCalculatorSchedulerModalBridge();


/* This will start auto-playing the slide when enter 100px in viewport from top…
Also do not make slider Auto-Play in Webflow. */ 

function play_slide(){
      	var tabTimeout;
      	clearTimeout(tabTimeout);
      	tabLoop();

    		// define loop - cycle through all tabs
   			function tabLoop() {
        		tabTimeout = setTimeout(function() {
               	$('.w-slider-arrow-right').click()  // click resets timeout, so no need for interval
         		}, 6000); 
   			 }

    			// reset timeout if a tab is clicked
    			$('.w-slider-arrow-right').click(function() {
        			clearTimeout(tabTimeout);
        			tabLoop();
        	});
    	}
    
    
    	let observer = new IntersectionObserver((entries, observer) => { 
    			entries.forEach(entry => {
    						if(entry.isIntersecting){
    										play_slide()
            						observer.unobserve(entry.target);
    						}
    			});
  		}, {rootMargin: "0px 0px -100px 0px"}); 

  		let target = $('.w-slider')[0]
  		observer.observe(target)


/* Entrepreneurs Page GSAP Animations */ 

let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".entrepreneurs_timeline-scroll-path",
    start: "top 25%",
    scrub: 1,
  }
});

t1.fromTo(".entrepreneurs-freedom_timeline-step", {mixBlendMode:"luminosity"}, {mixBlendMode:"normal", stagger: 0.5, duration: 2});




