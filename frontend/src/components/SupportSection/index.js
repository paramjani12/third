import React from 'react';
import img1 from '../../images/cicon.svg';
import img2 from '../../images/c++icon.svg';
import img3 from '../../images/javaicon.svg';
import img4 from '../../images/pythonicon.svg';
import img5 from '../../images/rubyicon.svg';
import img6 from '../../images/perlicon.svg';


import budget from '../../images/budget.png';
import diet from '../../images/diet.png';
import event from '../../images/event.png';
import expense from '../../images/expense.png';
import financial from '../../images/financial.png';
import retirement from '../../images/retirement.png';

import { SupportContainer,SupportH1,SupportWrapper,SupportCard,SupportIcon,SupportP,SupportH2 } from './SupportElements';
const Support = () => {
  return (
      <>
        <SupportContainer id='support'>
          <SupportH1>We Support</SupportH1>
          <SupportWrapper>
            <SupportCard>
              <SupportIcon src={budget} alt="language" />
              <SupportH2>Task</SupportH2>
              <SupportP>Manager</SupportP>
            </SupportCard>
            <SupportCard>
              <SupportIcon src={diet} alt="language"/>
              <SupportH2>Diet</SupportH2>
              <SupportP>Scheduler</SupportP>
            </SupportCard>
            <SupportCard>
              <SupportIcon src={event} alt="language"/>
              <SupportH2>Event</SupportH2>
              <SupportP>Planner</SupportP>
            </SupportCard>
            <SupportCard>
              <SupportIcon src={expense} alt="language"/>
              <SupportH2>Expense</SupportH2>
              <SupportP>Tracker</SupportP>
            </SupportCard>
            <SupportCard>
              <SupportIcon src={financial} alt="language"/>
              <SupportH2>Financial</SupportH2>
              <SupportP>Buddy</SupportP>
            </SupportCard>
            <SupportCard>
              <SupportIcon src={retirement} alt="language"/>
              <SupportH2>Retirement</SupportH2>
              <SupportP>Planner</SupportP>
            </SupportCard>
          </SupportWrapper>
        </SupportContainer>
      </>
  );
};

export default Support;
