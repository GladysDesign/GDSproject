//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/passTrackingValidate', function (req, res) {

    
    var trackingNb = req.session.data['passport-trackingNb']
    console.log("tracking: " + JSON.stringify(trackingNb));

    // Check whether the variable matches a condition
    if (trackingNb){
        // Send user to next page
        res.redirect('passport/passport-lastname')
     } else {
        console.log("error!!!!")
    }
 
  
  })

router.post('/benefit-selection-answer', function (req, res) {

    
    var selection = req.session.data['typeofbenefit']
  
    // Check whether the variable matches a condition
    if (selection == "low-income"){
      // Send user to next page
      res.redirect('benefit-claim/low-income')
    } else if (selection = 'disability'){
        res.redirect('benefit-claim/disability')
    } else if (selection = 'families'){
        res.redirect('benefit-claim/families')
    }else if (selection = 'other'){
        res.redirect('benefit-claim/otherbenefits')
    }
 
  
  })

  router.post('/benefitTracking', function (req, res) {
  
    var selection = req.session.data['benefit-trackingNb']

    // Check whether the variable matches a condition
    if (selection){
      // Send user to next page
      res.redirect('/benefit-claim/status')
    
    } else 
    {
        req.session.data['errorMessage'] = "This tracking number is invalid";
        console.log("error " + JSON.stringify(req.session.data));
        res.redirect('../benefit-claim/tracking-number');
    
    }
 
  
  })