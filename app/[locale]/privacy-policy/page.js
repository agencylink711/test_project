import Description from "@/components/reusablecomponent/Description";
import Title from "@/components/reusablecomponent/Title";
import { IBM_Plex_Mono, Work_Sans } from "next/font/google";
import React from "react";

const lexend = IBM_Plex_Mono({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

const work_sans = Work_Sans({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

const Page = () => {
  return (
    <div
      className={`${lexend.className} max-w-[1400px] px-4 mx-auto w-full py-12 tablet:w-[1400px] tablet:px-8 `}
    >
      {" "}
      {/* Applying work_sans font to the title */}
      <Title text="Privacy Policy for Link711" className="py-4" />
      <p className="py-2 text-[16px]">Last updated: March 14, 2024</p>
      <p className="py-2 text-[19px] leading-[25px]">
        This Privacy Policy describes Our policies and procedures on the
        collection, use and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You. <br /> <br /> We use Your Personal data to provide and improve the
        Service. By using the Service, You agree to the collection and use of
        information in accordance with this Privacy Policy. This Privacy Policy
        has been created with the help of the Privacy Policy Generator.
      </p>
      <Title text="Interpretation and Definitions" className="pb-4 pt-10" />
      <p className="py-2 text-[19px] leading-[25px]">
        The words of which the initial letter is capitalized have meanings
        defined under the following conditions. The following definitions shall
        have the same meaning regardless of whether they appear in singular or
        in plural.
      </p>
      <p className="py-4 text-[24px]  leading-[25px]">Definitions</p>
      <p className="py-2 text-[19px] leading-[25px]">
        For the purposes of this Privacy Policy:
      </p>
      <ul class="list-disc px-4 text-[18px]">
        <li class="list-item  py-2">
          Account means a unique account created for You to access our Service
          or parts of our Service.
        </li>
        <li class="list-item  py-2">
          Affiliate means an entity that controls, is controlled by or is under
          common control with a party, where "control" means ownership of 50% or
          more of the shares, equity interest or other securities entitled to
          vote for election of directors or other managing authority.
        </li>
        <li class="list-item  py-2">
          Company (referred to as either "the Company", "We", "Us" or "Our" in
          this Agreement) refers to agency link711, Social Media Agency
          Frankfurt.
        </li>
        <li class="list-item  py-2">
          Cookies are small files that are placed on Your computer, mobile
          device or any other device by a website, containing the details of
          Your browsing history on that website among its many uses.
        </li>
        <li class="list-item">
          Country refers to: Am Lachgraben 20 - 65931 Frankfurt am Main
        </li>
        <li class="list-item  py-2">
          Device means any device that can access the Service such as a
          computer, a cellphone or a digital tablet.
        </li>
        <li class="list-item  py-2">
          Personal Data is any information that relates to an identified or
          identifiable individual.
        </li>
        <li class="list-item">Service refers to the Website.</li>
        <li class="list-item  py-2">
          Service Provider means any natural or legal person who processes the
          data on behalf of the Company. It refers to third-party companies or
          individuals employed by the Company to facilitate the Service, to
          provide the Service on behalf of the Company, to perform services
          related to the Service or to assist the Company in analyzing how the
          Service is used.
        </li>
        <li class="list-item  py-2">
          Third-party Social Media Service refers to any website or any social
          network website through which a User can log in or create an account
          to use the Service.
        </li>
        <li class="list-item  py-2">
          Usage Data refers to data collected automatically, either generated by
          the use of the Service or from the Service infrastructure itself (for
          example, the duration of a page visit).
        </li>
        <li class="list-item  py-2">
          Website refers to Link711, accessible from{" "}
          <a href="https://www.link711.com" class="text-blue-500">
            https://www.link711.com
          </a>
        </li>
        <li class="list-item  py-2">
          You means the individual accessing or using the Service, or the
          company, or other legal entity on behalf of which such individual is
          accessing or using the Service, as applicable.
        </li>
      </ul>
      <Title
        text="Collecting and Using Your Personal Data"
        className="pb-4 pt-10"
      />
      <Description
        text="Types of Data Collected"
        className="text-[26px] py-4"
      />
      <p className="py-8 text-[24px] leading-[25px]">Personal Data</p>
      <p className="py-2 text-[19px] leading-[25px]">
        While using Our Service, We may ask You to provide Us with certain
        personally identifiable information that can be used to contact or
        identify You. Personally identifiable information may include, but is
        not limited to:
      </p>
      <ul class="list-disc px-4 text-[18px]">
        <li class="list-item py-2">Email address</li>
        <li class="list-item py-2">First name and last name</li>
        <li class="list-item py-2">Phone number</li>
        <li class="list-item py-2">
          Address, State, Province, ZIP/Postal code, City
        </li>
        <li class="list-item py-2">
          Usage Data refers to data collected automatically, either generated by
          the use of the Service or from the Service infrastructure itself (for
          example, the duration of a page visit).
        </li>
      </ul>
      <p className="py-8 text-[24px] leading-[25px]">Usage Data</p>
      <p className="py-2 text-[19px] leading-[25px]">
        Usage Data is collected automatically when using the Service. <br />{" "}
        <br /> Usage Data may include information such as Your Device's Internet
        Protocol address (e.g. IP address), browser type, browser version, the
        pages of our Service that You visit, the time and date of Your visit,
        the time spent on those pages, unique device identifiers and other
        diagnostic data.
        <br /> <br />
        When You access the Service by or through a mobile device, We may
        collect certain information automatically, including, but not limited
        to, the type of mobile device You use, Your mobile device unique ID, the
        IP address of Your mobile device, Your mobile operating system, the type
        of mobile Internet browser You use, unique device identifiers and other
        diagnostic data.
        <br /> <br /> We may also collect information that Your browser sends
        whenever You visit our Service or when You access the Service by or
        through a mobile device.
      </p>
      <p className="py-8 text-[24px] leading-[25px]">
        Information from Third-Party Social Media Services
      </p>
      <p className="py-2 text-[19px] leading-[25px]">
        The Company allows You to create an account and log in to use the
        Service through the following Third-party Social Media Services:
      </p>
      <ul class="text-[18px] list-disc px-4">
        <li class="list-item py-2">Google</li>
        <li class="list-item py-2">Facebook</li>
        <li class="list-item py-2">Instagram</li>
        <li class="list-item py-2">Twitter</li>
        <li class="list-item py-2">LinkedIn</li>
      </ul>
      <p className="py-2 text-[19px] leading-[25px]">
        If You decide to register through or otherwise grant us access to a
        Third-Party Social Media Service, We may collect Personal data that is
        already associated with Your Third-Party Social Media Service's account,
        such as Your name, Your email address, Your activities or Your contact
        list associated with that account. <br /> <br />
        You may also have the option of sharing additional information with the
        Company through Your Third-Party Social Media Service's account. If You
        choose to provide such information and Personal Data, during
        registration or otherwise, You are giving the Company permission to use,
        share, and store it in a manner consistent with this Privacy Policy.
      </p>
      <p className="py-8 text-[24px] leading-[25px]">
        Tracking Technologies and Cookies{" "}
      </p>
      <p className="py-2 text-[19px] leading-[25px]">
        We use Cookies and similar tracking technologies to track the activity
        on Our Service and store certain information. Tracking technologies used
        are beacons, tags, and scripts to collect and track information and to
        improve and analyze Our Service. The technologies We use may include:
      </p>
      <ul class="text-[18px] list-disc px-4">
        <li class="list-item py-2">
          Cookies or Browser Cookies. A cookie is a small file placed on Your
          Device. You can instruct Your browser to refuse all Cookies or to
          indicate when a Cookie is being sent. However, if You do not accept
          Cookies, You may not be able to use some parts of our Service. Unless
          you have adjusted Your browser setting so that it will refuse Cookies,
          our Service may use Cookies.
        </li>
        <li class="list-item py-2">
          Web Beacons. Certain sections of our Service and our emails may
          contain small electronic files known as web beacons (also referred to
          as clear gifs, pixel tags, and single-pixel gifs) that permit the
          Company, for example, to count users who have visited those pages or
          opened an email and for other related website statistics (for example,
          recording the popularity of a certain section and verifying system and
          server integrity).
        </li>
      </ul>
      <Title text="Use of Your Personal Data" className="pb-4 pt-10" />
      <p className="py-2 text-[19px] leading-[25px]">
        The Company may use Personal Data for the following purposes:
      </p>
      <ul class="text-[18px] list-disc px-4">
        <li class="list-item py-2">
          To provide and maintain our Service, including to monitor the usage of
          our Service.
        </li>
        <li class="list-item py-2">
          To manage Your Account: to manage Your registration as a user of the
          Service. The Personal Data You provide can give You access to
          different functionalities of the Service that are available to You as
          a registered user.
        </li>
        <li class="list-item py-2">
          For the performance of a contract: the development, compliance and
          undertaking of the purchase contract for the products, items or
          services You have purchased or of any other contract with Us through
          the Service.
        </li>
        <li class="list-item py-2">
          To contact You: To contact You by email, telephone calls, SMS, or
          other equivalent forms of electronic communication, such as a mobile
          application's push notifications regarding updates or informative
          communications related to the functionalities, products or contracted
          services, including the security updates, when necessary or reasonable
          for their implementation.
        </li>
        <li class="list-item py-2">
          To provide You with news, special offers and general information about
          other goods, services and events which we offer that are similar to
          those that you have already purchased or enquired about unless You
          have opted not to receive such information.
        </li>
        <li class="list-item py-2">
          To manage Your requests: To attend and manage Your requests to Us.
        </li>
        <li class="list-item py-2">
          For business transfers: We may use Your information to evaluate or
          conduct a merger, divestiture, restructuring, reorganization,
          dissolution, or other sale or transfer of some or all of Our assets,
          whether as a going concern or as part of bankruptcy, liquidation, or
          similar proceeding, in which Personal Data held by Us about our
          Service users is among the assets transferred.
        </li>
        <li class="list-item py-2">
          For other purposes: We may use Your information for other purposes,
          such as data analysis, identifying usage trends, determining the
          effectiveness of our promotional campaigns and to evaluate and improve
          our Service, products, services, marketing and your experience.
        </li>
      </ul>
      <Title text="Retention of Your Personal Data" className="pb-4 pt-10" />
      <p className="py-2 text-[19px] leading-[25px]">
        The Company will retain Your Personal Data only for as long as is
        necessary for the purposes set out in this Privacy Policy. We will
        retain and use Your Personal Data to the extent necessary to comply with
        our legal obligations (for example, if we are required to retain your
        data to comply with applicable laws), resolve disputes, and enforce our
        legal agreements and policies.
        <br /> <br /> The Company will also retain Usage Data for internal
        analysis purposes. Usage Data is generally retained for a shorter period
        of time, except when this data is used to strengthen the security or to
        improve the functionality of Our Service, or We are legally obligated to
        retain this data for longer time periods.
      </p>
      <Title text="Children's Privacy" className="pb-4 pt-10" />
      <p className="py-2 text-[19px] leading-[25px]">
        Our Service does not address anyone under the age of 13. We do not
        knowingly collect personally identifiable information from anyone under
        the age of 13. If You are a parent or guardian and You are aware that
        Your child has provided Us with Personal Data, please contact Us. If We
        become aware that We have collected Personal Data from anyone under the
        age of 13 without verification of parental consent, We take steps to
        remove that information from Our servers.
        <br /> <br /> If We need to rely on consent as a legal basis for
        processing Your information and Your country requires consent from a
        parent, We may require Your parent's consent before We collect and use
        that information.
      </p>
      <Title text="Changes to this Privacy Policy" className="pb-4 pt-10" />
      <p className="py-2 text-[19px] leading-[25px]">
        We may update Our Privacy Policy from time to time. We will notify You
        of any changes by posting the new Privacy Policy on this page. We will
        let You know via email and/or a prominent notice on Our Service, prior
        to the change becoming effective and update the "Last updated" date at
        the top of this Privacy Policy. You are advised to review this Privacy
        Policy periodically for any changes. Changes to this Privacy Policy are
        effective when they are posted on this page.
      </p>
      <Title text="Links to Other Websites" className="pb-4 pt-10" />
      <p className="py-2 text-[19px] leading-[25px]">
        Our Service may contain links to other websites that are not operated by
        Us. If You click on a third party link, You will be directed to that
        third party's site. We strongly advise You to review the Privacy Policy
        of every site You visit. We have no control over and assume no
        responsibility for the content, privacy policies or practices of any
        third party sites or services.
      </p>
      <Title text="Contact Us" className="pb-4 pt-10" />
      <p className="py-2 text-[19px] leading-[25px]">
        If you have any questions about this Privacy Policy, You can contact us:
      </p>
      <ul class="text-[18px] list-disc px-4">
        <li class="list-item py-2">
          By email: <a href="mailto:link@link711.com">link@link711.com</a>
        </li>
        <li class="list-item py-2">
          By visiting this page on our website:{" "}
          <a
            href="https://www.link711.com/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.link711.com/contact
          </a>
        </li>
        <li class="list-item py-2">By phone number: +4915213599612</li>
        <li class="list-item py-2">
          Address: Am Lachgraben 20 - 65931 Frankfurt am Main
        </li>
      </ul>
    </div>
  );
};

export default Page;
