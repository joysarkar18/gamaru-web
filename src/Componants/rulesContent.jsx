import React from "react";

const RulesComponent = () => {
  const listItemStyle = {
    color: "white",
    listStyleType: "disc",
    marginLeft: "20px",
  };
  const listItemStyle1 = {
    color: "white",
    listStyleType: "number",
    marginLeft: "20px",
  };

  return (
    <div className="p-8">
      <ol style={{ color: "white", listStyleType: "decimal" }}>
        <li style={listItemStyle1}>
          <strong>Account Eligibility:</strong>
          <ul>
            <li style={listItemStyle}>New BGMI accounts are not allowed.</li>
            <li style={listItemStyle}>
              Accounts with less than 50 matches played in every season and with
              a level below 40 cannot participate.
            </li>
          </ul>
        </li>
        <li style={listItemStyle1}>
          <strong>Headshot Percentage Limit:</strong>
          <ul>
            <li style={listItemStyle}>
              Headshot percentage should not exceed 28%.
            </li>
            <li style={listItemStyle}>
              Participants surpassing this limit will be kicked from the room
              with no refund.
            </li>
          </ul>
        </li>
        <li style={listItemStyle1}>
          <strong>Timely Participation:</strong>
          <ul>
            <li style={listItemStyle}>
              Participants must join the room before the 2 minutes of starting time.
            </li>
            <li style={listItemStyle}>
              Failure to do so absolves responsibility for any joining issues.
            </li>
            <li style={listItemStyle}>
              Refunds won't be processed for failure to join on time.
            </li>
          </ul>
        </li>
        <li style={listItemStyle1}>
          <strong>Room ID and Password Sharing:</strong>
          <ul>
            <li style={listItemStyle}>
              Do not share room ID and password with non-participants.
            </li>
            <li style={listItemStyle}>
              Unauthorized sharing can lead to permanent ban from the platfrom and loss of
              winnings.
            </li>
          </ul>
        </li>
        <li style={listItemStyle1}>
          <strong>Fair Play:</strong>
          <ul>
            <li style={listItemStyle}>
              Griefing and teaming up are against game rules.
            </li>
            <li style={listItemStyle}>
              Violators will be disqualified and lose their prizes.
            </li>
            <li style={listItemStyle}>
            Any team found engaging in hacking or any form of cheating will face a permanent ban from the platform, as well as forfeiture of their winnings.
            </li>
          </ul>
        </li>
        <li style={listItemStyle1}>
          <strong>Room ID and Password Timing:</strong>
          <ul>
            <li style={listItemStyle}>
              Room ID and password will be provided in the app 10-12 minutes before
              the match start time.
            </li>
            <li style={listItemStyle}>
              Match begins 10 minutes after sharing the details.
            </li>
            <li style={listItemStyle}>
              Participants must ensure they have the details before the match
              starts.
            </li>
          </ul>
        </li>
        <li style={listItemStyle1}>
          <strong>Paid Match:</strong>
          <ul>
            <li style={listItemStyle}>
              The match is a paid event; entry fee is required to participate.
            </li>
            <li style={listItemStyle}>
              Only 100 spots available; join before all spots are filled.
            </li>
            <li style={listItemStyle}>
              Entry fee is per individual; each squad/duo member pays
              individually.
            </li>
          </ul>
        </li>
        <li style={listItemStyle1}>
          <strong>Stable Position:</strong>
          <ul>
            <li style={listItemStyle}>
              Once joined, refrain from changing positions in the room.
            </li>
            <li style={listItemStyle}>
              Frequent position changes could result in being kicked from the
              room.
            </li>
          </ul>
        </li>
        <li style={listItemStyle1}>
          <strong>First Come First Serve:</strong>
          <p style={listItemStyle}>
            Spots are allocated on a first-come-first-served basis.
          </p>
        </li>
        <li style={listItemStyle1}>
          <strong>Victory and Rewards:</strong>
          <ul>
            <li style={listItemStyle}>
              Last standing participant receives the Chicken Dinner Award.
            </li>
            <li style={listItemStyle}>
              Rewards are given for each kill; refer to the provided details for
              rewards.
            </li>
          </ul>
        </li>
        <li style={listItemStyle1}>
          <strong>Device and Fair Play:</strong>
          <ul>
            <li style={listItemStyle}>
              Only mobile devices are allowed; hacks and emulators are
              prohibited.
            </li>
          </ul>
        </li>
        <li style={listItemStyle1}>
          <strong>Rule Violation Consequences:</strong>

          <ul>
            <li style={listItemStyle}>
              Violating rules leads to swift action, including account bans and
              reward loss.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default RulesComponent;
