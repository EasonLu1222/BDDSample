package pages;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.pagefactory.iOSXCUITFindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.concurrent.TimeUnit;

public class LoginPage {

    public LoginPage(AppiumDriver driver) {
        PageFactory.initElements(new AppiumFieldDecorator(driver), this);
    }

    @iOSXCUITFindBy(accessibility = "evan.chen.tutorial.uitestsample:id/loginId")
    @AndroidFindBy(id = "evan.chen.tutorial.uitestsample:id/loginId")
    public MobileElement loginId;

    @iOSXCUITFindBy(accessibility = "evan.chen.tutorial.uitestsample:id/loginPassword")
    @AndroidFindBy(id = "evan.chen.tutorial.uitestsample:id/loginPassword")
    public MobileElement loginPassword;

    @iOSXCUITFindBy(accessibility = "evan.chen.tutorial.uitestsample:id/login")
    @AndroidFindBy(id = "evan.chen.tutorial.uitestsample:id/login")
    public MobileElement login;

    @iOSXCUITFindBy(accessibility = "evan.chen.tutorial.uitestsample:id/result")
    @AndroidFindBy(id = "evan.chen.tutorial.uitestsample:id/result")
    public MobileElement result;

}
