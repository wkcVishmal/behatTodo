<?php

use Behat\Behat\Context\Context;
use Behat\Gherkin\Node\PyStringNode;
use Behat\Gherkin\Node\TableNode;
use Behat\MinkExtension\Context\MinkContext;
use Behat\Behat\Context\SnippetAcceptingContext;
use Behat\MinkExtension\Context\RawMinkContext;

/**
 * Defines application features from the specific context.
 */
class FeatureContext extends RawMinkContext implements Context, SnippetAcceptingContext
{
    /**
     * Initializes context.
     *
     * Every scenario gets its own context instance.
     * You can also pass arbitrary arguments to the
     * context constructor through behat.yml.
     */
    public function __construct()
    {
    }

    /**
     * @Given I am on :arg1
     */
    public function iAmOn($arg1)
    {
        $this->visitPath('/');
    }



    /**
     * @Given I fill in :arg1 with :arg2
     */
    public function iFillInWith($name, $arg2)
    {
        $nameField = $this->assertSession()->elementExists('css','#name');
        $nameField->setValue($name);

    }

    /**
     * @Given I press :arg1
     */
    public function iPress($arg1)
    {
        $submit = $this->assertSession()->elementExists('css','#submit');
        $submit->press();

    }

    /**
     * @Then I should see :arg1
     */
    public function iShouldSee($name)
    {
        //$this->visitPath('/');
        $this->assertSession()->addressEquals('/');
        $this->assertSession()->pageTextContains('dasdas');
        //throw new PendingException();
    }
}
