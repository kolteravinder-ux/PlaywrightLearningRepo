/*
1. Create a reusable label normalizer for JavaScript QA utilities.

Rules:
- Trim leading and trailing spaces.
- Convert text to lowercase.
- Replace non-alphanumeric groups with a single hyphen.
- Prefix the result with "js-basic-".
Case 1
Input: normalizeJsBasicsLabel(" Login Button ")

Expected: "js-basic-login-button"

Case 2
Input: normalizeJsBasicsLabel("User Profile: Edit!")

Expected: "js-basic-user-profile-edit"

Case 3
Input: normalizeJsBasicsLabel("---Search@@Box---")

Expected: "js-basic-search-box"

Case 4
Input: normalizeJsBasicsLabel(" ")

Expected: "js-basic"





2. Write a validator for names used in helper functions, variables, or test data keys.

Rules:
- Value must be a non-empty string after trimming.
- It must start with a letter, underscore, or dollar sign.
- Remaining characters may include letters, digits, underscore, or dollar sign.
- Reject reserved words used in this chapter: let, const, var, class, function, return.
Case 1
Input: isValidJsBasicsIdentifier("loginButton")

Expected: true

Case 2
Input: isValidJsBasicsIdentifier("$submit")

Expected: true

Case 3
Input: isValidJsBasicsIdentifier("1login")

Expected: false

Case 4
Input: isValidJsBasicsIdentifier("let")

Expected: false


3.Create a QA-friendly score classifier for practice readiness.

Rules:
- 90 and above => EXCELLENT.
- 75 to 89 => GOOD.
- 50 to 74 => NEEDS_PRACTICE.
- Below 50 => REVISIT.
Case 1
Input: classifyJsBasicsScore(95)

Expected: "EXCELLENT"

Case 2
Input: classifyJsBasicsScore(75)

Expected: "GOOD"

Case 3
Input: classifyJsBasicsScore(50)

Expected: "NEEDS_PRACTICE"

Case 4
Input: classifyJsBasicsScore(32)

Expected: "REVISIT"



4.Build a lookup function for important keywords or terms from this chapter group.

Rules:
- Normalize input by trimming and lowercasing.
- Return the mapped meaning when the term exists.
- Return "unknown" for unmapped terms.

Case 1
Input: getJsBasicsKeywordMeaning("NODE")

Expected: "runtime"

Case 2
Input: getJsBasicsKeywordMeaning(" v8 ")

Expected: "engine"

Case 3
Input: getJsBasicsKeywordMeaning("npm")

Expected: "package-manager"

Case 4
Input: getJsBasicsKeywordMeaning("not-a-topic")

Expected: "unknown"


5. Given a noisy list of topic labels, keep only supported chapter terms and remove duplicates.

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


6.Count how many check result strings represent a pass.

Rules:
- Treat matching as case-insensitive.
- A passing item contains the word "pass".
- Return only the count.

Case 1
Input: countPassingJsBasicsChecks(["login-pass","api-fail","logout-pass"])

Expected: 2

Case 2
Input: countPassingJsBasicsChecks(["SETUP PASS","CONFIG PASS"])

Expected: 2

Case 3
Input: countPassingJsBasicsChecks(["one-fail","two-skip"])

Expected: 0

7.Build a compact summary object from test result labels.

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

8.Merge default and override configuration values for a test helper.

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

9. Create a standard label for a test run dashboard.

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

10.
Find the first critical bug title from a bug list.

Rules:
- Each bug has title and severity.
- Return the title of the first bug with severity "critical".
- Return "No critical bug" when none exists.

Case 1
Input: findFirstCriticalJsBasicsBug([{"title":"Typo","severity":"low"},{"title":"Login crash","severity":"critical"}])

Expected: "Login crash"

Case 2
Input: findFirstCriticalJsBasicsBug([{"title":"Spacing issue","severity":"low"}])

Expected: "No critical bug"


11.Summarize a two-dimensional matrix of suite results.

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

12.Normalize and deduplicate tags used for organizing tests.

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


13.Create a small readiness gate for students before they move to the next practice step.

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


14. Convert a list of tasks into a numbered checklist.

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


15.Calculate a simple weighted practice score.

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