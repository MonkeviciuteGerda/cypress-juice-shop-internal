const addContext = require('mochawesome/addContext');

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        const suffix = runnable.hookName === 'before all' ? '-- before all hook ' : '';
        const screenshotFileName = `${runnable.parent.title} -- ${test.title} ${suffix}(failed).png`;

        addContext(
            { test },
          `screenshots/${Cypress.spec.name}/${screenshotFileName}`,
        );
    }
});
