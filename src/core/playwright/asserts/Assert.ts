import { expect } from "@playwright/test";
export default class Assert {
    /**
     * To verify that condition passed as input is true
     * @param condition - boolean condition
     * @param softAssert - for soft asserts this has to be set to true, else this can be ignored
     */
    public static async assertTrue(condition: boolean, softAssert = false) {
        try {
            expect(condition, `Expected is 'True' & Actual is '${condition}'`).toBeTruthy();
        } catch (error) {
            if (!softAssert) {
                 throw new Error(error);
            }
        }
    }
    /**
     * To verify that value1 contains value2
     * @param value1 - string input
     * @param value2 - should be present in value1
     * @param softAssert - for soft asserts this has to be set to true, else this can be ignored
     */
    public static async assertContains(value1: string, value2: string, softAssert = false) {
        try {
            expect(value1, `'${value1}' is expected to CONTAIN '${value2}'`).toContain(value2);
        } catch (error) {
            if (!softAssert) {
                 throw new Error(error);
            }
        }
    }

    /**
    * To verify that value1 contains value1 ignoring case
    * @param value1 - string input
    * @param value2 - should be present in value1
    * @param softAssert - for soft asserts this has to be set to true, else this can be ignored
    */
    public static async assertContainsIgnoreCase(value1: string, value2: string, softAssert = false) {
        try {
            expect(value1.toLowerCase(), `'${value1}' is expected to CONTAIN '${value2}'`).toContain(value2.toLowerCase());
        } catch (error) {
            if (!softAssert) {
                 throw new Error(error);
            }
        }
    }

    /**
   * To verify that actual contains expected ignoring case
   * @param actual - string input
   * @param expected - string input
   * @param softAssert - for soft asserts this has to be set to true, else this can be ignored
   */
    public static async assertEqualsIgnoreCase(actual: string, expected: string, softAssert = false) {
        try {
            expect(actual.toLowerCase(), `Expected '${expected}' should be EQUAL to Actual '${actual}'`)
                .toEqual(expected.toLowerCase());
        } catch (error) {
            if (!softAssert) {
                 throw new Error(error);
            }
        }
    }

    /**
     * To verify actual equals expected
     * @param value1 any object
     * @param value2 any object to compare
     * @param softAssert for soft asserts this has to be set to true, else this can be ignored
     */
    public static async assertEquals(actual: any, expected: any, softAssert = false) {
        try {
            expect(actual, `Expected '${expected}' should be EQUAL to Actual '${actual}'`).toEqual(expected);
        } catch (error) {
            if (!softAssert) {
                throw new Error(error);
            }
        }
    }

    /**
     * To verify that actual passed as input is false
     * @param condition boolean
     * @param softAssert for soft asserts this has to be set to true, else this can be ignored
     */
    public static async assertFalse(condition: boolean, softAssert = false) {
        try {
            expect(condition, `Expected is 'false' & Actual is '${condition}'`).toBeFalsy();
        } catch (error) {
            if (!softAssert) {
                 throw new Error(error);
            }
        }
    }

    /**
    * To verify that element not contains expected
    * @param actual any value 
    * @param expected any value
    * @param softAssert for soft asserts this has to be set to true, else this can be ignored
    */
    public static async assertNotContains(actual: any, expected: any, softAssert = false) {
        try {
            await expect(actual, `'${actual}' should NOT CONTAIN '${expected}'`).not.toContain(expected);
        } catch (error) {
            if (!softAssert) {
                 throw new Error(error);
            }
        }
    }

    /**
     * To verify actual not equals to expected
     * @param actual any object
     * @param expected any object to compare
     * @param softAssert for soft asserts this has to be set to true, else this can be ignored
     */
    public static async assertNotEquals(actual: any, expected: any, softAssert = false) {
        try {
            expect(actual, `Expected '${expected}' should NOT be EQUAL to Actual '${actual}'`).not.toEqual(expected);
        } catch (error) {
            if (!softAssert) {
                 throw new Error(error);
            }
        }
    }

    /**
     * To verify value not equals to null
     * @param value any value
     * @param softAssert for soft asserts this has to be set to true, else this can be ignored
     */
    public static async assertNotNull(value: any, softAssert = false) {
        try {
            expect(value, `Expected is 'NOT null' & Actual is '${value}'`).not.toEqual(null);
        } catch (error) {
            if (!softAssert) {
                 throw new Error(error);
            }
        }
    }

    /**
     * To validate that value is not null
     * @param value any value
     * @param softAssert for soft asserts this has to be set to true, else this can be ignored
     */
    public static async assertNull(value: any, softAssert = false) {
        try {
            expect(value, `Expected is 'null' & Actual is '${value}'`).toEqual(null);
        } catch (error) {
            if (!softAssert) {
                 throw new Error(error);
            }
        }
    }

    /**
    * To validate that value is Undefined
    * @param value any value
    * @param softAssert for soft asserts this has to be set to true, else this can be ignored
    */
    public static async assertUndefined(value: any, softAssert = false) {
        try {
            expect(value, `Expected is 'Undefined' & Actual is '${value}'`).toEqual(typeof undefined);
        } catch (error) {
            if (!softAssert) {
                 throw new Error(error);
            }
        }
    }

    /**
     * To validate that element is empty
     * @param value any element
     * @param softAssert for soft asserts this has to be set to true, else this can be ignored
     */
    public static async assertToBeEmpty(value: any, softAssert = false) {
        try {
            await expect(value, `Expected is 'Empty' & Actual is '${value}'`).toBeEmpty();
        } catch (error) {
            if (!softAssert) {
                 throw new Error(error);
            }
        }
    }
}
