import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import History from "@material-ui/icons/History";
import Flag from "@material-ui/icons/Flag";
import TrackChanges from "@material-ui/icons/TrackChanges";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>About Us</h2>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description}>
           
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Background"
              description="Quite a good number of Sindhis is settled in UK for more than 03 decades. It is strongly felt that they don't have any social and cultural platform where they can share their skills, expertise and energies to benefit each other. Sindhi Sangat United Kingdom (SSUK) is a social and cultural platform where Sindhis can strive for a prosperous Sindhi community in UK."
              icon={History}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Vision & Mission"
              description="A prosperous, flourishing and peaceful Sindhi community. Provision of a social and cultural platform which provides an opportunity to Sindhi community living in the UK to utilize their expertise, experience and skills for building up a prosperous Sindhi community through advocacy and capacity building to make Sindhi community self-sufficient. This would be achieved by strong networking."
              icon={Flag}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Objectives"
              description="  
              1. To unite all Sindhis living in the UK. 
              2. To provide a platform to promote Sindhi culture and language to preserve Sindhi heritage. 
              3. To promote awareness of social problems of Sindhi community. 
              4. To create awareness of sustainable participatory integrated development among Sindhis and achieve it through resource mobilization. 
              5. To strengthen and support Sindhi oriented institutions and human resources in different fields of life at all levels. "
              icon={TrackChanges}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Community</h2>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.description}>
              SSUK have arranged Social, Cultural and Musical events at large
              scale from 2004 which were attended by more than 300 families all
              over the United Kingdom. The notables were Members of Parliament
              of UK, Lord Mayors, Pakistani Consulate General, Police and crime
              commissioner and Dignitaries of Pakistani origin. Sadique Fakir
              Humera Channa and Arshad Mahmood well known Sindhi Singers have
              performed in these events. <br />
              <br />
              These events were free of charge as an effort to promote and
              introduce, Sindh, its old civilization, culture and music at
              international level. SSUK also arranges Eid gathering programs
              every year for the Sindhi community of UK. It has also arranged
              and participated cultural days such as Jashan – e – Latif, Sindhi
              Cultural days (Ajrak and Topi). <br />
              <br />
              SSUK also played very pivotal role in arranging guest speakers for
              Sindhi Mahfil, A well-known Sindhi musical programme in Sindhi
              Language that has viewers all over the world is aired by DM
              Digital TV from Manchester UK and hosted by Dr Shabir Ahmed
              Rahujo. SSUK has collected, donated and distributed funds in flood
              relief activities in Sindh. It has always stood with the Sindhi
              Community settled as well as working and the students in the UK.
              It has arranged funerals and sent the bodies of the deceased to be
              buried in the motherland. <br />
              <br />
              SSUK is always thankful to the Sindhi Community who donates
              generously on call of emergency. SSUK has also worked very closely
              and collaboratively with other UK based Sindhi organisation like,
              Sindh Doctors Association (SDA), World Sindhi Congress (WSC)
              International Sindhi Women Organisation (ISWO), Radio Voice of
              Sindh (RVOS). <br />
              <br />
              SSUK has participated and arranged joint programs with these
              organisations to strengthen the collaboration and benefit from
              mutual cooperation. Keeping the social and cultural demands of the
              community, SSUK strongly dreams about a Sindhi Community Centre in
              the UK which will serve multi purposes for the community.
              Moreover, SSUK also feel strong need for a 24 hour independent
              Sindhi Channel which will play a vital role to achieve the vision
              of SSUK.
              <br />
              <br />
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <CustomTabs
              headerColor="primary"
              tabs={[
                {
                  tabName: "Upcoming Events",
                  tabContent: (
                    <p className={classes.textCenter}>
                      Work in progress
                    </p>
                  )
                },
                {
                  tabName: "Social Media",
                  tabContent: (
                    <p className={classes.textCenter}>
                    Work in progress
                  </p>
                  )
                },
                {
                  tabName: "Contact",
                  tabContent: (
                    <p className={classes.textCenter}>
                      Work in progress
                    </p>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
