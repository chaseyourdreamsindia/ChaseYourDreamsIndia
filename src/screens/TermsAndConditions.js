import React from 'react';
import { ScrollView, View, Text, StyleSheet, Platform } from 'react-native';
import { BASECOLOR } from '../Assets/colors/colors';
import tw from 'twrnc'

const TermsAndConditions = () => {
    if (Platform.OS === "ios") {
        return (
            <View style={tw`w-full h-full`}>
                <ScrollView style={styles.container}>
                    <View style={tw`flex flex-col gap-3 pb-20`}>
                        <Text style={tw`text-xl font-bold text-black`}>Terms and Conditions</Text>
                        <Text>Last updated April 22, 2024</Text>
                        <Text>AGREEMENT TO OUR LEGAL TERMS</Text>
                        <Text>We are CHASE YOUR DREAMS INDIA PRIVATE LIMITED ('Company', 'we', 'us', or 'our'), a company registered in India at 12-7-124/6, G2, Sai Bhanu Enclave, New Mettuguda, Secunderabad, 500017., Hyderabad , Telangana 500017. Our GSTIN: 36AAJCC0060E1Z4.</Text>
                        <Text>We operate the mobile application CHASE YOUR DREAMS INDIA (the 'App'), as well as any other related products and services that refer or link to these legal terms (the 'Legal Terms') (collectively, the 'Services').</Text>
                        <Text>We provide counselling, Coaching, motivation, relationship Counselling, Family Counselling, Student Empowerment Programmes Corporate Wellness, Parent Counselling, Child Counselling etc</Text>
                        <Text>You can contact us by phone at +91-7799777013, email at Info@chaseyourdreamsindia.com, or by mail to 12-7-124/6, G2, Sai Bhanu Enclave, New Mettuguda, Secunderabad, 500017., Hyderabad , Telangana 500017, India.</Text>
                        <Text>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ('you'), and CHASE YOUR DREAMS INDIA PRIVATE LIMITED , concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</Text>
                        <Text>We will provide you with prior notice of any scheduled changes to the Services you are using. The modified Legal Terms will become effective upon posting or notifying you by info@chaseyourdreamsindia.com, as stated in the email message. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.</Text>
                        <Text>The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.</Text>
                        <Text>We recommend that you print a copy of these Legal Terms for your records.</Text>
                        <Text>TABLE OF CONTENTS</Text>
                        <Text style={styles.point}>1. OUR SERVICES</Text>
                        <Text style={styles.point}>2. INTELLECTUAL PROPERTY RIGHTS</Text>
                        <Text style={styles.point}>3. USER REPRESENTATIONS</Text>
                        <Text style={styles.point}>4. USER REGISTRATION</Text>
                        <Text style={styles.point}>5. PURCHASES AND PAYMENT</Text>
                        <Text style={styles.point}>6. REFUND POLICY</Text>
                        <Text style={styles.point}>7. PROHIBITED ACTIVITIES</Text>
                        <Text style={styles.point}>8. USER GENERATED CONTRIBUTIONS</Text>
                        <Text style={styles.point}>9. CONTRIBUTION LICENSE</Text>
                        <Text style={styles.point}>10. GUIDELINES FOR REVIEWS</Text>
                        <Text style={styles.point}>11. MOBILE APPLICATION LICENSE</Text>
                        <Text style={styles.point}>12. SOCIAL MEDIA</Text>
                        <Text style={styles.point}>13. ADVERTISERS</Text>
                        <Text style={styles.point}>14. SERVICES MANAGEMENT</Text>
                        <Text style={styles.point}>15. PRIVACY POLICY</Text>
                        <Text style={styles.point}>16. TERM AND TERMINATION</Text>
                        <Text style={styles.point}>17. MODIFICATIONS AND INTERRUPTIONS</Text>
                        <Text style={styles.point}>18. GOVERNING LAW</Text>
                        <Text style={styles.point}>19. DISPUTE RESOLUTION</Text>
                        <Text style={styles.point}>20. CORRECTIONS</Text>
                        <Text style={styles.point}>21. DISCLAIMER</Text>
                        <Text style={styles.point}>22. LIMITATIONS OF LIABILITY</Text>
                        <Text style={styles.point}>23. INDEMNIFICATION</Text>
                        <Text style={styles.point}>24. USER DATA</Text>
                        <Text style={styles.point}>25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</Text>
                        <Text style={styles.point}>26. SMS TEXT MESSAGING</Text>
                        <Text style={styles.point}>27. USERS AND RESIDENTS</Text>
                        <Text style={styles.point}>28. MISCELLANEOUS</Text>
                        <Text style={styles.point}>29. CONTACT US</Text>
                        <View style={styles.section}>
                            <Text style={styles.heading}>1. OUR SERVICES</Text>
                            <Text style={styles.content}>
                                The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable. All our services are provided online. User can opt for Voice or video call.
                            </Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.heading}>2. INTELLECTUAL PROPERTY RIGHTS</Text>
                            <Text style={styles.content}>
                                Our intellectual property{'\n\n'}
                                We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the 'Content'), as well as the trademarks, service marks, and logos contained therein (the 'Marks').{'\n\n'}
                                Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.{'\n\n'}
                                The Content and Marks are provided in or through the Services 'AS IS' for your personal, non-commercial use only.
                            </Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.heading}>3. USER REPRESENTATIONS</Text>
                            <Text style={styles.content}>
                                By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Services through automated or non-human means, whether through a bot, script, or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.{'\n\n'}
                                If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
                            </Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.heading}>4. USER REGISTRATION</Text>
                            <Text style={styles.content}>
                                You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                            </Text>
                        </View>
                        <Text>We accept the following forms of payment:</Text>
                        <Text> - UPI</Text>
                        <Text> - Debit cards</Text>
                        <Text> - Credit Cards</Text>
                        <Text> - Net Banking</Text>
                        <Text>
                            You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Taxes as applicable will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in INR.
                        </Text>
                        <Text>
                            You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
                        </Text>
                        <Text>
                            We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
                        </Text>

                        {/* REFUND POLICY */}
                        <Text style={styles.heading}>6. REFUND POLICY</Text>
                        <Text>All sales are final and no refund will be issued.</Text>
                        <Text>If You are late for a Session, the Session will complete at the scheduled time.
                                You or the Company may cancel this Agreement in writing (by email or letter), giving at least 7 clear days’ notice. No refund of money will be provided if the termination is from your side.</Text>
                        {/* PROHIBITED ACTIVITIES */}
                        <Text>You will be charged for missed Sessions ,except in exceptional circumstances (at the Company's discretion)</Text>
                        <Text style={styles.heading}>7. PROHIBITED ACTIVITIES</Text>
                        <Text>
                            You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                        </Text>
                        <Text>As a user of the Services, you agree not to:</Text>
                        <Text>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</Text>
                        <Text>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</Text>
                        <Text>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any content or enforce limitations on the use of the Services and/or the content contained therein.</Text>
                        <Text>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</Text>
                        {/* Continue the list of prohibited activities */}
                        <Text>
                            Use any information obtained from the Services in order to harass, abuse, or harm another person.
                        </Text>
                        <Text>
                            Make improper use of our support services or submit false reports of abuse or misconduct.
                        </Text>
                        {/* Continue listing each of the prohibited activities */}
                        <Text>
                            Use the Services in a manner inconsistent with any applicable laws or regulations.
                        </Text>
                        <Text>
                            Engage in unauthorized framing of or linking to the Services.
                        </Text>
                        <Text>
                            Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.
                        </Text>
                        {/* Continue listing each of the prohibited activities */}
                        <Text>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</Text>
                        <Text>Delete the copyright or other proprietary rights notice from any content.</Text>
                        <Text>Attempt to impersonate another user or person or use the username of another user.</Text>
                        <Text>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ('gifs'), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as 'spyware' or 'passive collection mechanisms' or 'PCMs').</Text>
                        <Text>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</Text>
                        <Text>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</Text>
                        <Text>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</Text>
                        <Text>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</Text>
                        <Text>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</Text>
                        <Text>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</Text>
                        <Text>Use a buying agent or purchasing agent to make purchases on the Services.</Text>
                        <Text>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</Text>
                        <Text>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the content for any revenue-generating endeavor or commercial enterprise.</Text>

                        {/* USER GENERATED CONTRIBUTIONS */}
                        <Text style={styles.heading}>8. USER GENERATED CONTRIBUTIONS</Text>
                        <Text>
                            The Services do not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, 'Contributions'). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Services' Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:
                        </Text>
                        {/* Continue listing each of the statements for USER GENERATED CONTRIBUTIONS */}
                        <Text>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</Text>
                        <Text>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</Text>
                        <Text>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</Text>
                        <Text>Your Contributions are not false, inaccurate, or misleading.</Text>
                        <Text>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</Text>
                        <Text>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libellous, slanderous, or otherwise objectionable (as determined by us).</Text>
                        <Text>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</Text>
                        <Text>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</Text>
                        <Text>Your Contributions do not violate any applicable law, regulation, or rule.</Text>
                        <Text>Your Contributions do not violate the privacy or publicity rights of any third party.</Text>
                        <Text>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</Text>
                        <Text>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</Text>
                        <Text>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</Text>
                        <Text>Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.</Text>
                        <Text style={styles.heading}>9. CONTRIBUTION LICENCE</Text>
                        <Text>You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).</Text>
                        <Text>By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.</Text>
                        <Text>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services, and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</Text>

                        {/* GUIDELINES FOR REVIEWS */}
                        <Text style={styles.heading}>10. GUIDELINES FOR REVIEWS</Text>
                        <Text>We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with the following criteria:</Text>
                        <Text>1. You should have firsthand experience with the person/entity being reviewed.</Text>
                        <Text>2. Your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language.</Text>
                        <Text>3. Your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability.</Text>
                        <Text>4. Your reviews should not contain references to illegal activity.</Text>
                        <Text>5. You should not be affiliated with competitors if posting negative reviews.</Text>
                        <Text>6. You should not make any conclusions as to the legality of conduct.</Text>
                        <Text>7. You may not post any false or misleading statements.</Text>
                        <Text>8. You may not organize a campaign encouraging others to post reviews, whether positive or negative.</Text>
                        <Text>We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to review.</Text>

                        {/* MOBILE APPLICATION LICENCE */}
                        <Text style={styles.heading}>11. MOBILE APPLICATION LICENCE</Text>
                        <Text>Use Licence</Text>
                        <Text>If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you, and to access and use the App on such devices strictly in accordance with the terms and conditions of this mobile application licence contained in these Legal Terms.</Text>
                        <Text>You shall not:</Text>
                        <Text>1. Except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App.</Text>
                        <Text>2. Make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App.</Text>
                        <Text>3. Violate any applicable laws, rules, or regulations in connection with your access or use of the App.</Text>
                        <Text>4. Remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the App.</Text>
                        <Text>5. Use the App for any revenue-generating endeavour, commercial enterprise, or other purpose for which it is not designed or intended.</Text>
                        <Text>6. Make the App available over a network or other environment permitting access or use by multiple devices or users at the same time.</Text>
                        <Text>7. Use the App for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the App.</Text>
                        <Text>8. Use the App to send automated queries to any website or to send any unsolicited commercial email.</Text>
                        <Text>9. Use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the App.</Text>

                        <Text>Apple iOS Devices</Text>
                        <Text>The following terms apply when you use the App obtained from the Apple Store (each an 'App Distributor') to access the Services:</Text>
                        <Text>1. The licence granted to you for our App is limited to a non-transferable licence to use the application on a device that utilises the Apple iOS or operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor’s terms of service.</Text>
                        <Text>2. We are responsible for providing any maintenance and support services with respect to the App as specified in the terms and conditions of this mobile application licence contained in these Legal Terms or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the App.</Text>
                        <Text>3. In the event of any failure of the App to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the App, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the App.</Text>
                        <Text>4. You represent and warrant that (i) you are not located in a country that is subject to a US government embargo, or that has been designated by the US government as a 'terrorist supporting' country, and (ii) you are not listed on any US government list of prohibited or restricted parties.</Text>
                        <Text>5. You must comply with applicable third-party terms of agreement when using the App, e.g. if you have a VoIP application, then you must not be in violation of their wireless data service agreement when using the App.</Text>
                        <Text>6. You acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application licence contained in these Legal Terms, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application licence contained in these Legal Terms against you as a third-party beneficiary thereof.</Text>
                        <Text style={styles.sectionHeader}>8. GOVERNING LAW</Text>
                        <Text style={styles.text}>
                            These Legal Terms shall be governed by and defined following the laws of India. CHASE YOUR DREAMS INDIA PRIVATE LIMITED and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
                        </Text>

                        <Text style={styles.sectionHeader}>19. DISPUTE RESOLUTION</Text>
                        <Text style={styles.subSectionHeader}>Informal Negotiations</Text>
                        <Text style={styles.text}>
                            To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a 'Dispute' and collectively, the 'Disputes') brought by either you or us (individually, a 'Party' and collectively, the 'Parties'), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
                        </Text>

                        <Text style={styles.subSectionHeader}>Binding Arbitration</Text>
                        <Text style={styles.text}>
                            Any dispute arising out of or in connection with these Legal Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by Arbitration. The number of arbitrators shall be one (1). The seat, or legal place, of arbitration shall be Hyderabad, Telangana State, India. The language of the proceedings shall be English. The governing law of these Legal Terms shall be substantive law of India.
                        </Text>

                        <Text style={styles.subSectionHeader}>Restrictions</Text>
                        <Text style={styles.text}>
                            The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class-action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
                        </Text>

                        <Text style={styles.subSectionHeader}>Exceptions to Informal Negotiations and Arbitration</Text>
                        <Text style={styles.text}>
                            The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
                        </Text>

                        <Text style={styles.sectionHeader}>20. CORRECTIONS</Text>
                        <Text style={styles.text}>
                            There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
                        </Text>

                        {/* Continue similarly with other sections ... */}

                        <Text style={styles.sectionHeader}>29. CONTACT US</Text>
                        <Text style={styles.text}>
                            In order to resolve a complaint regarding the Services or to receive further information regarding the use of the Services, please contact us at:
                        </Text>
                        <Text style={styles.text}>
                            CHASE YOUR DREAMS INDIA PRIVATE LIMITED
                        </Text>
                        <Text>12-7-124/6, G2, Sai Bhanu Enclave, New Mettuguda, Secunderabad, 500017.</Text>
                        <Text> Hyderabad, Telangana - 500017</Text>
                        <Text>India</Text>
                        <Text>Phone: +91-7799777013</Text>
                        <Text>info@chaseyourdreamsindia.com</Text>
                    </View>
                </ScrollView>
            </View>
        );
    } else {
        return (
            <View style={tw`w-full h-full`}>
                <ScrollView style={styles.container}>
                    <View style={tw`flex flex-col gap-3 pb-20`}>
                        <Text style={tw`text-xl font-bold text-black`}>Terms and Conditions</Text>
                        <Text style={styles.text}>Last updated April 22, 2024</Text>
                        <Text style={styles.text}>AGREEMENT TO OUR LEGAL TERMS</Text>
                        <Text style={styles.text}>
                            We are CHASE YOUR DREAMS INDIA PRIVATE LIMITED ('Company', 'we', 'us', or 'our'), a company registered in India at 12-7-124/6, G2, Sai Bhanu Enclave, New Mettuguda, Secunderabad, 500017, Hyderabad, Telangana 500017.
                        </Text>
                        <Text style={styles.text}>
                            Our GSTIN: 36AAJCC0060E1Z4.
                        </Text>
                        <Text style={styles.text}>
                            We operate the mobile application CHASE YOUR DREAMS INDIA (the 'App'), as well as any other related products and services that refer or link to these legal terms (the 'Legal Terms') (collectively, the 'Services').
                        </Text>
                        <Text style={styles.text}>
                            We provide counselling, coaching, motivation, relationship counselling, family counselling, student empowerment programmes, corporate wellness, parent counselling, child counselling, etc.
                        </Text>
                        <Text style={styles.text}>
                            You can contact us by phone at +91-7799777013, email at info@chaseyourdreamsindia.com, or by mail to 12-7-124/6, G2, Sai Bhanu Enclave, New Mettuguda, Secunderabad, 500017, Hyderabad, Telangana 500017, India.
                        </Text>
                        <Text style={styles.text}>
                            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ('you'), and CHASE YOUR DREAMS INDIA PRIVATE LIMITED, concerning your access to and use of the Services.
                        </Text>
                        <Text style={styles.text}>
                            You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms.
                        </Text>
                        <Text style={styles.text}>
                            IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                        </Text>
                        <Text style={styles.text}>
                            We will provide you with prior notice of any scheduled changes to the Services you are using.
                        </Text>
                        <Text style={styles.text}>
                            The modified Legal Terms will become effective upon posting or notifying you by info@chaseyourdreamsindia.com, as stated in the email message.
                        </Text>
                        <Text style={styles.text}>
                            By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.
                        </Text>
                        <Text style={styles.text}>
                            The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
                        </Text>
                        <Text style={styles.text}>
                            We recommend that you print a copy of these Legal Terms for your records.
                        </Text>

                        <Text style={styles.text}>
                            TABLE OF CONTENTS
                        </Text>
                        <Text style={styles.text}>
                            1. OUR SERVICES
                        </Text>
                        <Text style={styles.text}>
                            2. INTELLECTUAL PROPERTY RIGHTS
                        </Text>
                        <Text style={styles.text}>
                            3. USER REPRESENTATIONS
                        </Text>
                        <Text style={styles.text}>
                            4. USER REGISTRATION
                        </Text>
                        <Text style={styles.text}>
                            5. PURCHASES AND PAYMENT
                        </Text>
                        <Text style={styles.text}>
                            6. REFUND POLICY
                        </Text>
                        <Text style={styles.text}>
                            7. PROHIBITED ACTIVITIES
                        </Text>
                        <Text style={styles.text}>
                            8. USER GENERATED CONTRIBUTIONS
                        </Text>
                        <Text style={styles.text}>
                            9. CONTRIBUTION LICENCE
                        </Text>
                        <Text style={styles.text}>
                            10. GUIDELINES FOR REVIEWS
                        </Text>
                        <Text style={styles.text}>
                            11. MOBILE APPLICATION LICENCE
                        </Text>
                        <Text style={styles.text}>
                            12. SOCIAL MEDIA
                        </Text>
                        <Text style={styles.text}>
                            13. ADVERTISERS
                        </Text>
                        <Text style={styles.text}>
                            14. SERVICES MANAGEMENT
                        </Text>
                        <Text style={styles.text}>
                            15. PRIVACY POLICY
                        </Text>
                        <Text style={styles.text}>
                            16. TERM AND TERMINATION
                        </Text>
                        <Text style={styles.text}>
                            17. MODIFICATIONS AND INTERRUPTIONS
                        </Text>
                        <Text style={styles.text}>
                            18. GOVERNING LAW
                        </Text>
                        <Text style={styles.text}>
                            19. DISPUTE RESOLUTION
                        </Text>
                        <Text style={styles.text}>
                            20. CORRECTIONS
                        </Text>
                        <Text style={styles.text}>
                            21. DISCLAIMER
                        </Text>
                        <Text style={styles.text}>
                            22. LIMITATIONS OF LIABILITY
                        </Text>
                        <Text style={styles.text}>
                            23. INDEMNIFICATION
                        </Text>
                        <Text style={styles.text}>
                            24. USER DATA
                        </Text>
                        <Text style={styles.text}>
                            25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                        </Text>
                        <Text style={styles.text}>
                            26. SMS TEXT MESSAGING
                        </Text>
                        <Text style={styles.text}>
                            27. USERS AND RESIDENTS
                        </Text>
                        <Text style={styles.text}>
                            28. MISCELLANEOUS
                        </Text>
                        <Text style={styles.text}>
                            29. CONTACT US
                        </Text>

                        <Text style={styles.heading}>1. OUR SERVICES</Text>
                        <Text style={styles.text}>
                            The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable. All our services are provided online. Users can opt for voice or video call.
                        </Text>

                        <Text style={styles.heading}>2. INTELLECTUAL PROPERTY RIGHTS</Text>
                        <Text style={styles.text}>
                            Our intellectual property
                        </Text>
                        <Text style={styles.text}>
                            We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the 'Content'), as well as the trademarks, service marks, and logos contained therein (the 'Marks').
                        </Text>
                        <Text style={styles.text}>
                            Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
                        </Text>
                        <Text style={styles.text}>
                            The Content and Marks are provided in or through the Services 'AS IS' for your personal, non-commercial use only.
                        </Text>
                        <Text style={styles.text}>
                            Your use of our Services
                        </Text>
                        <Text style={styles.text}>
                            Subject to your compliance with these Legal Terms, including the 'PROHIBITED ACTIVITIES' section below, we grant you a non-exclusive, non-transferable, revocable licence to:
                        </Text>
                        <Text style={styles.text}>
                            access the Services; and
                        </Text>
                        <Text style={styles.text}>
                            download or print a copy of any portion of the Content to which you have properly gained access.
                        </Text>
                        <Text style={styles.text}>
                            solely for your personal, non-commercial use.
                        </Text>

                        <Text style={styles.text}>
                            Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                        </Text>

                        <Text style={styles.text}>
                            If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: Info@chaseyourdreamsindia.com.
                        </Text>
                        <Text style={styles.text}>
                            If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
                        </Text>
                        <Text style={styles.text}>
                            We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
                        </Text>
                        <Text style={styles.text}>
                            Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
                        </Text>

                        <Text style={styles.heading}>Your submissions</Text>
                        <Text style={styles.text}>
                            Please review this section and the 'PROHIBITED ACTIVITIES' section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
                        </Text>
                        <Text style={styles.text}>
                            Submissions: By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ('Submissions'), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
                        </Text>
                        <Text style={styles.text}>
                            You are responsible for what you post or upload: By sending us Submissions through any part of the Services you:
                        </Text>
                        <Text style={styles.text}>
                            confirm that you have read and agree with our 'PROHIBITED ACTIVITIES' and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;
                        </Text>
                        <Text style={styles.text}>
                            to the extent permissible by applicable law, waive any and all moral rights to any such Submission;
                        </Text>
                        <Text style={styles.text}>
                            warrant that any such Submission is original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and
                        </Text>
                        <Text style={styles.text}>
                            warrant and represent that your Submissions do not constitute confidential information.
                        </Text>
                        <Text style={styles.text}>
                            You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law.
                        </Text>
                        <Text style={styles.heading}>3. USER REPRESENTATIONS</Text>
                        <Text style={styles.text}>
                            By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.
                        </Text>
                        <Text style={styles.text}>
                            If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
                        </Text>

                        <Text style={styles.heading}>4. USER REGISTRATION</Text>
                        <Text style={styles.text}>
                            You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                        </Text>

                        <Text style={styles.heading}>5. PURCHASES AND PAYMENT</Text>
                        <Text style={styles.text}>
                            We accept the following forms of payment:
                            {'\n'}- UPI
                            {'\n'}- Debit cards
                            {'\n'}- Credit Cards
                            {'\n'}- Net Banking
                        </Text>
                        <Text style={styles.text}>
                            You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Taxes, as applicable, will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in INR.
                        </Text>
                        <Text style={styles.text}>
                            You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
                        </Text>
                        <Text style={styles.text}>
                            We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
                        </Text>

                        <Text style={styles.heading}>6. REFUND POLICY</Text>
                        <Text style={styles.text}>
                            All sales are final and no refund will be issued.
                        </Text>
                        <Text style={tw`text-black`}>If You are late for a Session, the Session will complete at the scheduled time.
                                You or the Company may cancel this Agreement in writing (by email or letter), giving at least 7 clear days’ notice. No refund of money will be provided if the termination is from your side.</Text>
                        {/* PROHIBITED ACTIVITIES */}
                        <Text style={tw`text-black`}>You will be charged for missed Sessions ,except in exceptional circumstances (at the Company's discretion)</Text>

                        <Text style={styles.heading}>7. PROHIBITED ACTIVITIES</Text>
                        <Text style={styles.text}>
                            You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                        </Text>
                        <Text style={styles.text}>
                            As a user of the Services, you agree not to:
                            {'\n'}- Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
                            {'\n'}- Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.
                            {'\n'}- Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.
                            {'\n'}- Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.
                            {'\n'}- Use any information obtained from the Services in order to harass, abuse, or harm another person.
                            {'\n'}- Make improper use of our support services or submit false reports of abuse or misconduct.
                            {'\n'}- Use the Services in a manner inconsistent with any applicable laws or regulations.
                            {'\n'}- Engage in unauthorized framing of or linking to the Services.
                            {'\n'}- Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.
                            {'\n'}- Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.
                            {'\n'}- Delete the copyright or other proprietary rights notice from any Content.
                            {'\n'}- Attempt to impersonate another user or person or use the username of another user.
                            {'\n'}- Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ('gifs'), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as 'spyware' or 'passive collection mechanisms' or 'pcms').
                            {'\n'}- Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.
                            {'\n'}- Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.
                            {'\n'}- Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.
                            {'\n'}- Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.
                            {'\n'}- Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.
                            {'\n'}- Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.
                            {'\n'}- Use a buying agent or purchasing agent to make purchases on the Services.
                            {'\n'}- Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.
                            {'\n'}- Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.
                        </Text>

                        <Text style={styles.heading}>8. USER GENERATED CONTRIBUTIONS</Text>
                        <Text style={styles.text}>
                            The Services does not offer users the ability to submit or post content. However, we may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, 'Contributions'). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Services' Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:
                            {'\n'}- The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.
                            {'\n'}- You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.
                            {'\n'}- You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.
                            {'\n'}- Your Contributions are not false, inaccurate, or misleading.
                            {'\n'}- Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.
                            {'\n'}- Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).
                            {'\n'}- Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.
                            {'\n'}- Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.
                            {'\n'}- Your Contributions do not violate any applicable law, regulation, or rule.
                            {'\n'}- Your Contributions do not violate the privacy or publicity rights of any third party.
                            {'\n'}- Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.
                            {'\n'}- Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.
                            {'\n'}- Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.
                        </Text>
                        <Text style={styles.heading}>9. CONTRIBUTION LICENSE</Text>
                        <Text style={styles.text}>
                            You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).
                        </Text>
                        <Text style={styles.text}>
                            By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
                        </Text>
                        <Text style={styles.text}>
                            We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
                        </Text>

                        <Text style={styles.heading}>10. GUIDELINES FOR REVIEWS</Text>
                        <Text style={styles.text}>
                            We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with the following criteria:
                            {'\n'}(1) you should have firsthand experience with the person/entity being reviewed;
                            {'\n'}(2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language;
                            {'\n'}(3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability;
                            {'\n'}(4) your reviews should not contain references to illegal activity;
                            {'\n'}(5) you should not be affiliated with competitors if posting negative reviews;
                            {'\n'}(6) you should not make any conclusions as to the legality of conduct;
                            {'\n'}(7) you may not post any false or misleading statements;
                            {'\n'}(8) you may not organize a campaign encouraging others to post reviews, whether positive or negative.
                        </Text>
                        <Text style={styles.text}>
                            We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to review.
                        </Text>

                        <Text style={styles.heading}>11. MOBILE APPLICATION LICENSE</Text>
                        <Text style={styles.text}>
                            Use License{'\n'}
                            If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you, and to access and use the App on such devices strictly in accordance with the terms and conditions of this mobile application license contained in these Legal Terms. You shall not:
                            {'\n'}(1) except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App;
                            {'\n'}(2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App;
                            {'\n'}(3) violate any applicable laws, rules, or regulations in connection with your access or use of the App;
                            {'\n'}(4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the App;
                            {'\n'}(5) use the App for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended;
                            {'\n'}(6) make the App available over a network or other environment permitting access or use by multiple devices or users at the same time;
                            {'\n'}(7) use the App for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the App;
                            {'\n'}(8) use the App to send automated queries to any website or to send any unsolicited commercial email;
                            {'\n'}(9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the App.
                        </Text>

                        <Text style={styles.subheading}>Android Devices</Text>
                        <Text style={styles.text}>
                            The following terms apply when you use the App obtained from the Google Play Store (each an 'App Distributor') to access the Services:
                            {'\n'}(1) the license granted to you for our App is limited to a non-transferable license to use the application on a device that utilizes the Android operating system, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor’s terms of service;
                            {'\n'}(2) we are responsible for providing any maintenance and support services with respect to the App as specified in the terms and conditions of this mobile application license contained in these Legal Terms or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the App;
                            {'\n'}(3) in the event of any failure of the App to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the App, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the App;
                            {'\n'}(4) you represent and warrant that (i) you are not located in a country that is subject to a US government embargo, or that has been designated by the US government as a 'terrorist supporting' country and (ii) you are not listed on any US government list of prohibited or restricted parties;
                            {'\n'}(5) you must comply with applicable third-party terms of agreement when using the App, e.g. if you have a VoIP application, then you must not be in violation of their wireless data service agreement when using the App;
                            {'\n'}(6) you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application license contained in these Legal Terms, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application license contained in these Legal Terms against you as a third-party beneficiary thereof.
                        </Text>

                        <Text style={styles.heading}>12. SOCIAL MEDIA</Text>
                        <Text style={styles.text}>
                            As part of the functionality of the Services, you may link your account with online accounts you have with third-party service providers (each such account, a 'Third-Party Account') by either: (1) providing your Third-Party Account login information through the Services; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account.
                        </Text>
                        <Text style={styles.text}>
                            By granting us access to any Third-Party Accounts, you understand that (1) we may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the 'Social Network Content') so that it is available on and through the Services via your account, including without limitation any friend lists and (2) we may submit to and receive from your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account.
                            {'\n'}Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your account on the Services. Please note that if a Third-Party Account or associated service becomes unavailable or our access to such Third-Party Account is terminated by the third-party service provider, then Social Network Content may no longer be available on and through the Services.
                            {'\n'}You will have the ability to disable the connection between your account on the Services and your Third-Party Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content. You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the Services.
                            {'\n'}You can deactivate the connection between the Services and your Third-Party Account by contacting us using the contact information below or through your account settings (if applicable). We will attempt to delete any information stored on our servers that was obtained through such Third-Party Account, except the username and profile picture that become associated with your account.
                        </Text>
                        <Text style={styles.heading}>13. ADVERTISERS</Text>
                        <Text style={styles.text}>
                            We allow advertisers to display their advertisements and other information in certain areas of the Services, such as sidebar advertisements or banner advertisements. We simply provide the space to place such advertisements, and we have no other relationship with advertisers.
                        </Text>

                        <Text style={styles.heading}>14. SERVICES MANAGEMENT</Text>
                        <Text style={styles.text}>
                            We reserve the right, but not the obligation, to: {'\n'}
                            (1) monitor the Services for violations of these Legal Terms; {'\n'}
                            (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; {'\n'}
                            (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; {'\n'}
                            (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and {'\n'}
                            (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
                        </Text>

                        <Text style={styles.heading}>15. PRIVACY POLICY</Text>
                        <Text style={styles.text}>
                            We care about data privacy and security. Please review our Privacy Policy: ____. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in India. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in India, then through your continued use of the Services, you are transferring your data to India, and you expressly consent to have your data transferred to and processed in India.
                        </Text>

                        <Text style={styles.heading}>16. TERM AND TERMINATION</Text>
                        <Text style={styles.text}>
                            These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                        </Text>
                        <Text style={styles.text}>
                            If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
                        </Text>

                        <Text style={styles.heading}>17. MODIFICATIONS AND INTERRUPTIONS</Text>
                        <Text style={styles.text}>
                            We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We also reserve the right to modify or discontinue all or part of the Services without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
                        </Text>
                        <Text style={styles.text}>
                            We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
                        </Text>

                        <Text style={styles.heading}>18. GOVERNING LAW</Text>
                        <Text style={styles.text}>
                            These Legal Terms shall be governed by and defined following the laws of India. CHASE YOUR DREAMS INDIA PRIVATE LIMITED and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
                        </Text>

                        <Text style={styles.heading}>19. DISPUTE RESOLUTION</Text>
                        <Text style={styles.text}>
                            Informal Negotiations{'\n'}
                            To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a 'Dispute' and collectively, the 'Disputes') brought by either you or us (individually, a 'Party' and collectively, the 'Parties'), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
                        </Text>
                        <Text style={styles.subheading}>Binding Arbitration</Text>
                        <Text style={styles.text}>
                            Any dispute arising out of or in connection with these Legal Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by Arbitration number of arbitrators shall be one (1). The seat, or legal place, or arbitration shall be Hyderabad, Telangana State, India. The language of the proceedings shall be English. The governing law of these Legal Terms shall be substantive law of India.
                        </Text>

                        <Text style={styles.subheading}>Restrictions</Text>
                        <Text style={styles.text}>
                            The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, {'\n'}
                            (a) no arbitration shall be joined with any other proceeding; {'\n'}
                            (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and {'\n'}
                            (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
                        </Text>

                        <Text style={styles.subheading}>Exceptions to Informal Negotiations and Arbitration</Text>
                        <Text style={styles.text}>
                            The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: {'\n'}
                            (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; {'\n'}
                            (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and {'\n'}
                            (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
                        </Text>

                        <Text style={styles.heading}>20. CORRECTIONS</Text>
                        <Text style={styles.text}>
                            There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
                        </Text>

                        <Text style={styles.heading}>21. DISCLAIMER</Text>
                        <Text style={styles.text}>
                            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY {'\n'}(1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, {'\n'}
                            (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, {'\n'}
                            (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, {'\n'}
                            (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, {'\n'}
                            (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR {'\n'}
                            (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. {'\n'}
                            WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. {'\n'}
                            AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
                        </Text>
                        <Text style={styles.heading}>22. LIMITATIONS OF LIABILITY</Text>
                        <Text style={styles.text}>
                            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE ONE (1) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
                        </Text>

                        <Text style={styles.heading}>23. INDEMNIFICATION</Text>
                        <Text style={styles.text}>
                            You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: {'\n'}
                            (1) use of the Services; {'\n'}
                            (2) breach of these Legal Terms; {'\n'}
                            (3) any breach of your representations and warranties set forth in these Legal Terms; {'\n'}
                            (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or {'\n'}
                            (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. {'\n'}
                            Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defence and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defence of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
                        </Text>

                        <Text style={styles.heading}>24. USER DATA</Text>
                        <Text style={styles.text}>
                            We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
                        </Text>

                        <Text style={styles.heading}>25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</Text>
                        <Text style={styles.text}>
                            Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
                        </Text>

                        <Text style={styles.heading}>26. SMS TEXT MESSAGING</Text>
                        <Text style={styles.text}>
                            Opting Out {'\n'}
                            If at any time you wish to stop receiving SMS messages from us, simply reply to the text with "STOP.” You may receive an SMS message confirming your opt-out. {'\n'}

                            Message and Data Rates {'\n'}
                            Please be aware that message and data rates may apply to any SMS messages sent or received. The rates are determined by your carrier and the specifics of your mobile plan. {'\n'}

                            Support {'\n'}
                            If you have any questions or need assistance regarding our SMS communications, please email us at info@chaseyourdreamsindia.com or call us at +91-7799777013.
                        </Text>

                        <Text style={styles.heading}>27. ALL USERS AND RESIDENTS</Text>
                        <Text style={styles.text}>
                            If any complaint with us is not satisfactorily resolved, you can seek remedy through Arbitration/Consumer Forum within the jurisdiction of Hyderabad, Telangana State, India.
                        </Text>

                        <Text style={styles.heading}>28. MISCELLANEOUS</Text>
                        <Text style={styles.text}>
                            These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment, or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defences you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
                        </Text>

                        <Text style={styles.heading}>29. CONTACT US</Text>
                        <Text style={styles.text}>
                            In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at: {'\n'}
                            CHASE YOUR DREAMS INDIA PRIVATE LIMITED {'\n'}
                            12-7-124/6, G2, Sai Bhanu Enclave, New Mettuguda, Secunderabad, 500017. {'\n'}
                            Hyderabad, Telangana - 500017 {'\n'}
                            India {'\n'}
                            Phone: +91-7799777013 {'\n'}
                            info@chaseyourdreamsindia.com
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 65 : 20,
        padding: 10,
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
        color: "black",
        paddingBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "black"
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "black"
    },
    point: {
        flexDirection: 'row',
        marginBottom: 10,
        color: "black"
    },
    bullet: {
        fontSize: 30,
        marginRight: 10,
        lineHeight: 30,
        color: BASECOLOR, // Adjust bullet color as needed
    },
    description: {
        fontSize: 16,
        flex: 1,
        color: "black"
    },

    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    text: {
        color: "black",
        fontWeight: "400",
        lineHeight:30
    },
    heading:{
        color:"black"
    }
});

export default TermsAndConditions;
