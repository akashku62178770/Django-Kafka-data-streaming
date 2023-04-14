import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

const TC = () => {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={10}>
          <h1>Terms and Conditions...</h1>
          <hr />
          <p>
            Thank you for considering our clubbing and matchmaking platform.
            Below are the terms and conditions that govern the use of our
            platform:
          </p>
          <Box
            sx={{
              width: "100%",
              height: 400,
            //   maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <ol className="list-group list-group-numbered">
              <li className="list-group-item">
                Eligibility: To use our platform, you must be at least 18 years
                of age and have the legal capacity to enter into a contract.
              </li>
              <li className="list-group-item">
                Account Creation: To create an account on our platform, you must
                provide accurate and complete information. You are responsible
                for maintaining the confidentiality of your account login
                credentials and for all activities that occur under your
                account.
              </li>
              <li className="list-group-item">
                Use of Platform: Our platform is for personal and non-commercial
                use only. You agree not to use our platform for any unlawful
                purpose or in a way that violates these terms and conditions.
              </li>
              <li className="list-group-item">
                User Content: You are solely responsible for any content that
                you post on our platform, including profile information,
                messages, and other user-generated content. You grant us a
                non-exclusive, royalty-free, worldwide, and perpetual license to
                use, reproduce, modify, adapt, publish, translate, create
                derivative works from, distribute, and display your user content
                in any form, media, or technology.
              </li>
              <li className="list-group-item">
                Prohibited Content: You agree not to post any content that is
                offensive, defamatory, harassing, or discriminatory. You also
                agree not to post any content that infringes on the intellectual
                property rights of others.
              </li>
              <li className="list-group-item">
                Matchmaking Services: Our platform provides matchmaking
                services, but we do not guarantee the success of any matches or
                the compatibility of any users.
              </li>
              <li className="list-group-item">
                Third-Party Content: Our platform may contain links to
                third-party websites or content. We do not endorse or control
                any third-party content and are not responsible for any damages
                or losses resulting from your use of such content.
              </li>
              <li className="list-group-item">
                Termination: We reserve the right to terminate your account or
                access to our platform at any time, for any reason, without
                notice.
              </li>
              <li className="list-group-item">
                Intellectual Property: Our platform and all content and
                materials on our platform are owned by us or our licensors and
                are protected by copyright, trademark, and other intellectual
                property laws.
              </li>
              <li className="list-group-item">
                Disclaimer of Warranties: Our platform is provided "as is" and
                without warranties of any kind, either express or implied. We do
                not guarantee the accuracy, completeness, or reliability of any
                content or information on our platform.
              </li>
              <li className="list-group-item">
                Limitation of Liability: We are not liable for any damages or
                losses arising from your use of our platform, including but not
                limited to direct, indirect, incidental, punitive, or
                consequential damages.
              </li>
              <li className="list-group-item">
                Indemnification: You agree to indemnify and hold us harmless
                from any claims, damages, or losses arising from your use of our
                platform or your violation of these terms and conditions.
              </li>
              <li className="list-group-item">
                Governing Law and Jurisdiction: These terms and conditions are
                governed by the laws of the jurisdiction where we are located,
                and any disputes arising under these terms and conditions will
                be resolved in that jurisdiction.
              </li>
              <li className="list-group-item">
                Changes to Terms and Conditions: We reserve the right to modify
                these terms and conditions at any time, without notice. Your
                continued use of our platform after any such changes constitutes
                your acceptance of the new terms and conditions.
              </li>
              <li className="list-group-item"></li>
            </ol>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default TC;
