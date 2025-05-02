// Membership Pricing Calculator

const subscription = 55;

const pricing = {
  "500": {
    under55: 140,
    over55: 280,
    family: 420
  },
  "15000": {
    under55: 40,
    over55: 80,
    family: 120
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




