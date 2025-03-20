//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/benefit-selection-answer', function (req, res) {

    
    var selection = req.session.data['whattypeofbenefit']
  
    // Check whether the variable matches a condition
    if (selection == "low-income"){
      // Send user to next page
      res.redirect('benefits/low-income')
    } else if (selection = 'disability'){
        res.redirect('benefits/disability')
    } else if (selection = 'families'){
        res.redirect('benefits/families')
    }else if (selection = 'other'){
        res.redirect('benefits/otherbenefits')
    }
 
  
  })