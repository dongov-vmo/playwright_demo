import { Reporter, FullConfig, Suite, TestCase, TestError, TestResult, TestStep } from "@playwright/test/reporter";
import { createLogger, format, transports } from 'winston';

import { existsSync, mkdirSync } from 'fs';

const logDir = 'logs';

if (!existsSync(logDir)) {
    mkdirSync(logDir);
}

const logger = createLogger({
    level: 'info',
    format: format.json(),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'logs/info.log' }),
    ],
});

export default class MyReporter implements Reporter {

    /**
     * Logs the completion of each test case and its status.
     * @param test - The test case.
     * @param result - The test result.
     */
    onTestEnd(test: TestCase, result: TestResult): void {
        if(result.status != "passed"){
            logger.info(`Test Case Completed: ${test.title} Status: ${result.status}`);
        }
    }

    /**
     * Logs the execution of each test step if it belongs to the "test.step" category.
     * @param test - The test case.
     * @param result - The test result.
     * @param step - The test step.
     */
    onStepBegin(test: TestCase, result: TestResult, step: TestStep): void {
        if (step.category === 'test.step') {
            logger.info(`Executing Step: ${step.title}`);
        }
    }

    /**
     * Logs the error message when an error occurs during the test execution.
     * @param error - The test error.
     */
    onError(error: TestError): void {
       logger.info(error.message);
    }
}