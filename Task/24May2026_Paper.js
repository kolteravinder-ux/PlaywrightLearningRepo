/*
Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals,
 null, undefined, and equality.

Create a reusable label normalizer for JavaScript QA utilities.

Rules:
- Trim leading and trailing spaces.
- Convert text to lowercase.
- Replace non-alphanumeric groups with a single hyphen.
- Prefix the result with "js-basic-".
*/

// console.log(normalizejsbasiclabel("---Search@@Box---"))

// function normalizejsbasiclabel(str)
// {

// let trimmed = str.trim();
    
    
//     let lowercase = trimmed.toLowerCase();
    
//     let normalized = lowercase.replace(/[^a-z0-9]+/g, '-');
    
//     normalized = normalized.replace(/^-+|-+$/g, '');
    
//     let result = 'js-basic-' + (normalized || '');
    
//     result = result.replace(/-$/, '');
    
//     return result;




    
// }



/*
Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, 
literals, null, undefined, and equality.

Write a validator for names used in helper functions, variables, or test data keys.

Rules:
- Value must be a non-empty string after trimming.
- It must start with a letter, underscore, or dollar sign.
- Remaining characters may include letters, digits, underscore, or dollar sign.
- Reject reserved words used in this chapter: let, const, var, class, function, return.
*/
// isValidJsBasicsIdentifier("loginButton")

// function isValidJsBasicsIdentifier(value)
// {
//  // Step 1: Check if input is a string
//     if (typeof input !== 'string') {
//         return false;
//     }
    
//     // Step 2: Trim and check if non-empty
//     const trimmed = input.trim();
//     if (trimmed === '') {
//         return false;
//     }
    
//     // Step 3: Check reserved words
//     const reservedWords = ['let', 'const', 'var', 'class', 'function', 'return'];
//     if (reservedWords.includes(trimmed)) {
//         return false;
//     }
    
//     // Step 4: Check if starts with letter, underscore, or dollar sign
//     // and remaining characters are valid
//     const identifierPattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    
//     return identifierPattern.test(trimmed);

// }



/*
Create a QA-friendly score classifier for practice readiness.

Rules:
- 90 and above => EXCELLENT.
- 75 to 89 => GOOD.
- 50 to 74 => NEEDS_PRACTICE.
- Below 50 => REVISIT.
*/

// console.log(classifyJsBasicsScore(95))
// console.log(classifyJsBasicsScore(75))
// console.log(classifyJsBasicsScore(50))
// console.log(classifyJsBasicsScore(32))


// function classifyJsBasicsScore(score){

// return score>=90?"EXCELLENT"
// :score>=75 && score<=89?"GOOD"
// :score>=50 && score<=74?"NEEDS_PRACTICE"
// :score<=50?"REVISIT":null


// }


/*
Build a lookup function for important keywords or terms from this chapter group.

Rules:
- Normalize input by trimming and lowercasing.
- Return the mapped meaning when the term exists.
- Return "unknown" for unmapped terms.

*/
// console.log(getJsBasicsKeywordMeaning("NODE"))
// console.log(getJsBasicsKeywordMeaning(" v8 "))
// console.log(getJsBasicsKeywordMeaning("npm"))
// console.log(getJsBasicsKeywordMeaning("not-a-topic"))

// function getJsBasicsKeywordMeaning(input)
// {
//     input=input.trim().toLowerCase()

//     switch(input)
//     {
// case "node":
// return "runtime";
// break
// case "v8":
// return "engine";
// break
// case "npm":
// return "package-manager";
// break
// case "node":
// return "runtime";
// break

//         default:
//             return "unknown";
//             break
//     }



// }

/*
Count how many check result strings represent a pass.

Rules:
- Treat matching as case-insensitive.
- A passing item contains the word "pass".
- Return only the count.
*/
//  console.log(countPassingJsBasicsChecks(["login-pass","api-fail","logout-pass"]))
//  console.log(countPassingJsBasicsChecks(["SETUP PASS","CONFIG PASS"]))
//  console.log( countPassingJsBasicsChecks(["one-fail","two-skip"]))
// function countPassingJsBasicsChecks(arr)
//  {
// let cnt=0
//     arr.forEach((ele,ind)=>{
//         ele=ele.toLowerCase()
    
//         if(ele.includes("pass"))
//         {
//             cnt++
//         }

//     })
// return cnt 
//  }




/*
Given a noisy list of topic labels, keep only supported chapter terms and remove duplicates.
Rules:
- Trim and lowercase each item.
- Allow known aliases from the chapter group.
- Return canonical topic keys in first-seen order.
- Skip unsupported values.
Case 1
Input: filterSupportedJsBasicsTopics(["NODE"," v8 ","unknown"])
Expected: ["node","v8"]

Case 2
Input: filterSupportedJsBasicsTopics(["node","runtime","node"])
Expected: ["node"]

Case 3
Input: filterSupportedJsBasicsTopics(["npm","node","v8"])
Expected: ["npm","node","v8"]
*/

// console.log(filterSupportedJsBasicsTopics(["NODE"," v8 ","unknown"]))
// console.log(filterSupportedJsBasicsTopics(["node","runtime","node"]))
// console.log(filterSupportedJsBasicsTopics(["npm","node","v8"]))
// function filterSupportedJsBasicsTopics(topics) {
//     const supportedTopics = {
//         "node": "node",
//         "runtime": "node",
//         "v8": "v8",
//         "engine": "v8",
//         "npm": "npm"
//     };
    
//     return topics.reduce((result, topic) => {
//         const cleaned = topic.trim().toLowerCase();
//         const canonical = supportedTopics[cleaned];
        
//         // Add if supported and not already in result
//         if (canonical && !result.includes(canonical)) {
//             result.push(canonical);
//         }
        
//         return result;
//     }, []);
// }




/*
Build a compact summary object from test result labels.

Rules:
- Count total items.
- Count items containing pass, fail, and skip.
- Return an object with total, passed, failed, skipped.
Case 1
Input: summarizeJsBasicsResults(["login-pass","api-fail","profile-skip"])
Expected: {"total":3,"passed":1,"failed":1,"skipped":1}

Case 2
Input: summarizeJsBasicsResults([])
Expected: {"total":0,"passed":0,"failed":0,"skipped":0}

Case 3
Input: summarizeJsBasicsResults(["a-pass","b-pass"])
Expected: {"total":2,"passed":2,"failed":0,"skipped":0}
*/

// console.log(summarizeJsBasicsResults(["a-pass","b-pass"]))
// console.log(summarizeJsBasicsResults(["login-pass","api-fail","profile-skip"]))
// console.log(summarizeJsBasicsResults([]))

// function summarizeJsBasicsResults(arr)
// {
// //let arr=["a-pass","b-pass"]
// let total=arr.length
// let passed=0
// let failed=0
// let skipped=0

// arr.forEach((ele,indx)=> {
//   let newelement=  ele.split("-")
//     switch(newelement[1])
//     {
//         case "pass":
//                     passed++
//                     break
        
//         case "fail":
//                     failed++
//                     break
        
//         case "skip":
//                     skipped++
//                     break

//         default:
//             break
//     }


// })

// // console.log("Total Element:",total)
// // console.log("Passed element:",passed)
// // console.log("Failed Element:",failed)
// // console.log("Skipped Element:",skipped)
// //{"total":3,"passed":1,"failed":1,"skipped":1}
// return {"total":total,
//     "passed":passed,
//     "failed":failed,
//     "skipped":skipped}


// }





/*
Merge default and override configuration values for a test helper.
Rules:
- Override values must win.
- If retries is missing from both objects, default it to 0.
- Do not mutate the input objects.
Case 1
Input: mergeJsBasicsConfig({"retries":1,"env":"dev"}, {"retries":3})
Expected: {"retries":3,"env":"dev"}

Case 2
Input: mergeJsBasicsConfig({"env":"qa"}, {"timeout":5000})
Expected: {"env":"qa","timeout":5000,"retries":0}

Case 3
Input: mergeJsBasicsConfig({"env":"dev","retries":2}, {"env":"stage"})
Expected: {"env":"stage","retries":2}
*/
// console.log(mergeJsBasicsConfig({"retries":1,"env":"dev"}, {"retries":3}))
// console.log(mergeJsBasicsConfig({"env":"qa"}, {"timeout":5000}))
// console.log(mergeJsBasicsConfig({"env":"dev","retries":2}, {"env":"stage"}))
// function mergeJsBasicsConfig(defaults, overrides) {
//     const merged = { ...defaults, ...overrides }
    
//     // Default retries to 0 if missing from both
//     if (!('retries' in merged)) {
//         merged.retries = 0
//     }
    
//     return merged;
// }










/*
Create a standard label for a test run dashboard.
Rules:
- Trim the suite name.
- Lowercase the environment.
- Append build number as build-N.
- Join the three parts with " | ".
Case 1
Input: buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42)
Expected: "Smoke Suite | staging | build-42"

Case 2
Input: buildJsBasicsRunLabel("Regression", "PROD", 7)
Expected: "Regression | prod | build-7"
*/

// console.log(buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42))
// console.log(buildJsBasicsRunLabel("Regression", "PROD", 7))

// function buildJsBasicsRunLabel(suitename, env , buildnum)
// {
// suitename=suitename.trim()
// env=env.toLowerCase()
// let buildno="build-"+buildnum

// return `${suitename} | ${env} | ${buildno}`


// }

/*
Find the first critical bug title from a bug list.

Rules:
- Each bug has title and severity.
- Return the title of the first bug with severity "critical".
- Return "No critical bug" when none exists.
Case 1
Input: findFirstCriticalJsBasicsBug([
{"title":"Typo","severity":"low"},
{"title":"Login crash","severity":"critical"}])
Expected: "Login crash"

Case 2
Input: findFirstCriticalJsBasicsBug([{"title":"Spacing issue","severity":"low"}])
Expected: "No critical bug"
*/

// console.log(findFirstCriticalJsBasicsBug([
// {title:"Typo",severity:"low"},
// {title:"Login crash",severity:"critical"}]))
// console.log(findFirstCriticalJsBasicsBug([{"title":"Spacing issue","severity":"low"}]))

// function findFirstCriticalJsBasicsBug(arr1)
// {
// let newarr= arr1.find(x=>x.severity==="critical")
// return newarr?newarr.title:"No Critical bug"
// }




/*
Summarize a two-dimensional matrix of suite results.

Rules:
- The input is an array of arrays.
- Each cell is a result string.
- Count total, passed, failed, and collect failedCases.
Case 1
Input: summarizeJsBasicsMatrix([["login-pass"],["checkout-fail"]])
Expected: {"total":2,"passed":1,"failed":1,"failedCases":["checkout-fail"]}
Case 2
Input: summarizeJsBasicsMatrix([["a-pass","b-pass"],["c-pass"]])
Expected: {"total":3,"passed":3,"failed":0,"failedCases":[]}
*/
// console.log(summarizeJsBasicsMatrix([["login-pass"],["checkout-fail"]]))
// console.log(summarizeJsBasicsMatrix([["a-pass","b-pass"],["c-pass"]]))
// function summarizeJsBasicsMatrix(arr)
// {
//     let total =0
// let passed =0
// let failed =0
// let failedCases =new Array()

// for(let i=0;i<arr.length;i++)  
// {
    
    
// for(let a1=0;a1<arr[i].length;a1++)
// {
//     if(a1===0)total=total+arr[i].length



//     //console.log(arr[i][a1])
//     let ele= arr[i][a1]
//     let newelement=  ele.split("-")
//     switch(newelement[1])
//     {
//         case "pass":
//                     passed++
//                     break
        
//         case "fail":
//                     failed++
//                     failedCases.push(ele)
//                     break
        
//         default:
//             break
//     }



// }

// }

// // console.log('Total:',total)
// // console.log('Passed:',passed)
// // console.log('Failed:',failed)
// // console.log('Failed Cases:',failedCases)
// return{
//     Total: total,
//     Passed: passed,
//     Failed: failed,
//     FiledCases: failedCases
// }

// }



/*
Normalize and deduplicate tags used for organizing tests.

Rules:
- Trim each tag.
- Lowercase each tag.
- Remove blank values.
- Keep first-seen order.
Case 1
Input: createUniqueJsBasicsTags([" Smoke ","smoke","Regression"])
Expected: ["smoke","regression"]

Case 2
Input: createUniqueJsBasicsTags([""," API "," ","api"])
Expected: ["api"]
*/

// console.log(createUniqueJsBasicsTags([" Smoke ","smoke","Regression"]))

// console.log(createUniqueJsBasicsTags([""," API "," ","api"]))


// function createUniqueJsBasicsTags(arr)
// {
// let newele=new Array()
// arr.forEach((e,i)=>{

// //trim space
// e=e.trim()

// //to lowercase
// e=e.toLowerCase()

// if(!newele.includes(e))
// {
//     if(e!=="") newele.push(e)
// }


// })

// return newele
// }





/*
Create a small readiness gate for students before they move to the next practice step.
Rules:
- Return READY only when all three flags are true.
- Return BLOCKED otherwise.
- Do not coerce strings like "true"; use boolean values.

Case 1
Input: checkJsBasicsReadinessGate(true, true, true)
Expected: "READY"

Case 2
Input: checkJsBasicsReadinessGate(true, false, true)
Expected: "BLOCKED"
*/


// console.log(checkJsBasicsReadinessGate(true, true, true))
// console.log(checkJsBasicsReadinessGate(true, false, true))

// function checkJsBasicsReadinessGate(flags1, flags2, flags3)
// {
//     return flags1===true && flags2===true && flags3===true? 'READY':'BLOCKED'


// }




/*
Convert a list of tasks into a numbered checklist.
Rules:
- Keep the original task text after trimming.
- Number items from 1.
- Append " - TODO" to each item.
- Skip blank values.

Case 1
Input: buildJsBasicsChecklist(["Install Node","Create GitHub repo"])
Expected: ["1. Install Node - TODO","2. Create GitHub repo - TODO"]

Case 2
Input: buildJsBasicsChecklist(["Practice switch"," ","Push code"])
Expected: ["1. Practice switch - TODO","2. Push code - TODO"]
*/
// buildJsBasicsChecklist(["Install Node","Create GitHub repo"])
// buildJsBasicsChecklist(["Practice switch"," ","Push code"])

// function buildJsBasicsChecklist(arr)
// {
// let a1=new Array()
// let cnt=1
// arr.forEach((e,i)=>{
// //trim space
// e=e.trim()
// if(e!=='')
// {
// let e1= String(cnt).concat(`. ${e}`).concat(' - TODO')
// a1.push(e1)
// cnt++
// }

// })
// console.log(a1)
// }





/*
Calculate a simple weighted practice score.

Rules:
- Each passed item gives 2 points.
- Each failed item subtracts 1 point.
- Skipped items are 0 points.
- Return the final number.

Case 1
Input: calculateJsBasicsWeightedScore(5, 2, 1)
Expected: 8

Case 2
Input: calculateJsBasicsWeightedScore(3, 0, 0)
Expected: 6

Case 3
Input: calculateJsBasicsWeightedScore(1, 4, 3)
Expected: -2

*/
// console.log(calculateJsBasicsWeightedScore(5, 2, 1))
// console.log(calculateJsBasicsWeightedScore(3, 0, 0))
// console.log(calculateJsBasicsWeightedScore(1, 4, 3))
// function calculateJsBasicsWeightedScore(e1, e2, e3)
// {

//   return   e1*(2)+e2*(-1)+e3*(0)
// }
