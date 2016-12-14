module LeapYear (isLeapYear) where

isLeapYear :: Integer -> Bool
isLeapYear year = integerDivision 4 && (not . integerDivision) 100 || integerDivision 400
  where integerDivision = (0 ==) . (mod year)
