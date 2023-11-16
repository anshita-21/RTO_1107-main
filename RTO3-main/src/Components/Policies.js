// Policies.js

import React, { useState } from "react";
import "./Policies.css";
import { Link } from "react-router-dom";

const PolicyDetails = ({ index, expandedIndex, setExpandedIndex, title, details }) => {
  const isExpanded = index === expandedIndex;

  const handleToggle = () => {
    setExpandedIndex(isExpanded ? -1 : index);
  };

  return (
    <div>
      <div onClick={handleToggle} className="policy-title">
        <strong>{title}</strong>
      </div>
      {isExpanded && <p className="policy-details">{details}</p>}
    </div>
  );
};

const Policies = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <div className="policies-container">
      <h2>ACTS, POLICIES & RULES</h2>
      <PolicyDetails
        index={0}
        expandedIndex={expandedIndex}
        setExpandedIndex={setExpandedIndex}
        title="Section 1. Short title, extent and commencement"
        details={`
          (1) This Act may be called the Motor Vehicles Act, 1988.
          (2) It extends to the whole of India.
          (3) It shall come into force on such date1 as the Central Government may, by notification in the Official Gazette, appoint;
              and different dates may be appointed for different State and any reference in this Act to the commencement of this Act shall,
              in relation to a States, be construed as a reference to the coming into force of this Act in that State.
        `}
      />
      <PolicyDetails
        index={1}
        expandedIndex={expandedIndex}
        setExpandedIndex={setExpandedIndex}
        title="Section 2. Definitions"
        details={`
          In this Act, unless context otherwise requires,
          (1) adapted vehicle means a motor vehicle either specially designed and constructed, or to which alterations have been made
              under sub-section. (2) of section 52, for the use of a person suffering from any physical defect or disability, and used solely
              by or for such person
        `}
      />
      <PolicyDetails
        index={2}
        expandedIndex={expandedIndex}
        setExpandedIndex={setExpandedIndex}
        title="Section 2A. e-cart and e-rickshaw"
        details={`
          Save as otherwise provided in the proviso to sub-section (1) of section 7 and sub-section (10) of section 9,
          the provisions of this Act shall apply to e-cart and e-rickshaw. (2) For the purposes of this section, e-cart or e-rickshaw
          means a special purpose battery powered vehicle of power not exceeding 4000 watts, having three wheels for carrying goods
          or passengers, as the case may be, for hire or reward, manufactured, constructed or adapted, equipped and maintained
          in accordance with such specifications, as may be prescribed in this behalf.
        `}
      />
      <PolicyDetails
        index={3}
        expandedIndex={expandedIndex}
        setExpandedIndex={setExpandedIndex}
        title="Section 2B. Promotion of innovation"
        details={`
          Notwithstanding anything contained in this Act and subject to such conditions as may be prescribed by the Central Government,
          in order to promote innovation, research and development in the fields of vehicular engineering, mechanically propelled vehicles
          and transportation in general, the Central Government may exempt certain types of mechanically propelled vehicles from the application
          of the provisions of this Act.
        `}
      />
      <PolicyDetails
        index={4}
        expandedIndex={expandedIndex}
        setExpandedIndex={setExpandedIndex}
        title="Section 3. Necessity for driving licence"
        details={`
          (1) No person shall drive a motor vehicle in any public place unless he holds an effective driving licence issued to him
          authorising him to drive the vehicle; and no person shall so drive a transport vehicle [other than 1[a motor cab or motor cycle]
          hired for his own use or rented under any scheme made under sub-section (2) of section 75] unless his driving licence specifically
          entitles him so to do. (2) The conditions subject to which sub-section (1) shall not apply to a person receiving instructions in driving
          a motor vehicle shall be such as may be prescribed by the Central Government.
        `}
      />
      <PolicyDetails
        index={5}
        expandedIndex={expandedIndex}
        setExpandedIndex={setExpandedIndex}
        title="Section 4. Age limit in connection with driving of motor vehicles"
        details={`
          (1) No person under the age of eighteen years shall drive a motor vehicle in any public place: Provided that 1[a motor cycle with
          engine capacity not exceeding 50cc] may be driven in a public place by a person after attaining the age of sixteen years. (2)
          Subject to the provisions of section 18, no person under the age of twenty years shall drive a transport vehicle in any public place.
          (3) No learners licence or driving licence shall be issued to any person to drive a vehicle of the class to which he has made an application
          unless he is eligible to drive that class of vehicle under this section.
        `}
      />
      <PolicyDetails
        index={6}
        expandedIndex={expandedIndex}
        setExpandedIndex={setExpandedIndex}
        title="Section 5. Responsibility of owners of motor vehicles"
        details={`
          No owner or person in charge of a motor vehicle shall cause or permit any person who does not satisfy the provisions of section 3 or
          section 4 to drive the vehicle.
        `}
      />
      <PolicyDetails
        index={7}
        expandedIndex={expandedIndex}
        setExpandedIndex={setExpandedIndex}
        title="Section 6. Restrictions on the holding of driving licences"
        details={`
          (1) No person shall, while he holds any driving licence for the time being in force, hold any other driving licence except a learner’s
          licence or a driving licence issued in accordance with the provisions of section 18 or a document authorising, in accordance with
          the rules made under section 139, the person specified therein to drive a motor vehicle. (2) No holder of a driving licence or a learner’s
          licence shall permit it to be used by any other person. (3) Nothing in this section shall prevent a licensing authority having the jurisdiction
          referred to in sub-section (1) of section 9 from adding to the classes of vehicles which the driving licence authorises the holder to drive.
        `}
      />
      <PolicyDetails
        index={8}
        expandedIndex={expandedIndex}
        setExpandedIndex={setExpandedIndex}
        title="Section 7. Restrictions on the granting of learner's licences"
        details={`
          No person shall be granted a learner's licence to drive a transport vehicle unless he has held a driving licence to drive a light motor vehicle
          for at least one year.
        `}
      />
      <PolicyDetails
        index={9}
        expandedIndex={expandedIndex}
        setExpandedIndex={setExpandedIndex}
        title="Section 8. Grant of learner's licence"
        details={`
          Any person who is not disqualified under section 4 for driving a motor vehicle and who is not for the time being disqualified for holding or
          obtaining a driving licence may, subject to the provisions of section 7, apply to 1)any of the licensing authority in the State]-- (i) in which he
          ordinarily resides or carries on business, or (ii) in which the school or establishment referred to in section 12 from where he intends to receive
          instruction in driving a motor vehicle is situate, for the issue to him of a learner's licence.
        `}
      />
      <Link to="/home" className="go-back-button">
        Go Back to Home
      </Link>
    </div>
  );
};

export default Policies;
