import { Injectable } from '@angular/core';
import { Template } from './template.interface';

@Injectable({
  providedIn: 'root'
})

export class Templates {
  public templateArray: Array<Template> = [
    {
      name: 'Field Report Memo',
      value: `
        Purpose: This memo presents my the findings of my visit to the computer labat Clark C252.

        Summary: In general, I felt that the lab needs much new equipment and
        renovation

        Problem:The inspection was designed to determine if the present equipmentwas
        adequate to provide graduate students with the technology
        needed to perform the tasks expected of them by their professors and
        thesis research.

        Methods: I ran a series of tasks on SPSS and WordPerfect and recorded
        memory capacity and processing time for each task

        Results: The inspection found that the hardware used to run the computers is
        outdated and that the computers itself are very slow.

        Conlussion: This lab is inadequate for the everyday needs of graduate students in
        this department

        Recommendation: Four new computers running on Windows98 and a processing speed
        of at least 233mhz should be purchased immediately


        `
    },
    {
      name: 'Meeting Minute Memo',
      value: `
        MEETING ATTENDEES:

        Crystal Overtoon, COO

        Michael DuVer, Co-Head of Employee Management

        Alison Thompson, Head of Employee Activities

        Marie Avalet, Director of Quarterly Management

        MEETING SUMMARY & OBJECTIVE:

        As the goals of Cumbington LLC develop, the board members will hold a meeting to
        discuss several initiatives. These initiatives will aim to facilitate greater employee engagement
        and improve morale among employees in the workplace. We will discuss
        how these goals will align with the others in place for the first quarter of 2022. We will also establish
        the budgets for these engagement events and activities.

        Each board member is asked to bring a list of at least three suggestions for engagement activities.
        Please be prepared to share these ideas during an informal three-minute presentation during the meeting.

        Please inform Cumbington Secretary James Mistall of your availability to attend this meeting.
        You can also direct any questions to him.

        He can be reached via email at [insert email address] or phone at [insert phone number here].
         We look forward to your participation on October 19th, 2021.
        `
    },
    {
      name: 'Response Memo',
      value: `
        This memorandum is in response to your team’s external financial audit
        findings, dated August 01, 2025, to August 15, 2025. We thoroughly
        reviewed your findings and verified them to ensure accuracy.

        In line with this, we would like to inform you that the company’s management
        team is looking into the discrepancies documented in the report and will take
        all steps necessary to address them.

        `
    },
    {
      name: 'Status Memo',
      value: `
        Coworkers,

        It has come to my attention that many in the office have been spending time on the Google home page microgames. This memo is a reminder to use your work hours for work.

        According to a recent article, the estimated daily cost of people collectively playing these games instead of working is over $120 million—which is calculated based on the daily average increased time spent on the Google home page (36 seconds).

        If these estimates are applied to our 600 office employees, this results in a nearly $700 weekly loss.

        This is a conservative estimate considering the extensive discussions that occur about beating the office's current high score. The extra cost quickly adds up.

        Of course, we don't want you to view our organization as a place of drudgery and draconian rules. I encourage a fun and competitive environment, and I recognize that we certainly won't be profitable if you are unhappy or dissatisfied with your jobs. This is just a reminder to be careful with your use of company time.

        Thank you,

        The Manager

        `
    }
  ]
}
