## **Issue and Bug Communication**

---

### Write useful issues

It is a dev’s job to decompose user stories into small issues. An issue is a concrete task. This guide is helpful.

### Write useful bug reports

We have a bug report template you can pick when creating a new issue.

### Select an issue and assign it to yourself

If you decide to work on an issue or bug, make sure you assign it to yourself so work isn’t duplicated.

## **Work with the Repo**

---

- Install and configure git and your GitHub account:
  [configure git](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

- [Authenticate your GitHub account](https://docs.github.com/en/get-started/quickstart/set-up-git)

- For the core team: [clone the code](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

- For everyone else: [make a fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

- Create a new branch: [basic branching](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

- Naming a branch: add what type of work/branch this is, the issue number, and a descriptive name, e.g.:

  - feat/13-community-profile-card
  - bug/5-incomplete-text
  - chore/24-update-node-version

- Make sure your branch is [up-to-date](https://docs.gpcrdb.org/git_workflow.html#keeping-your-branch-up-to-date) with main before you begin

## **Adhere to code standards**

---

### Linter

We are using Eslint for this project, remember to run it before pushing to remote. When pushing or making a PR an action runs the linter, it must pass for the branch to be merged.

Run the linter: `next lint`

### Testing

We will be using Jest for testing. Create your tests as you code. We will also run an action with the tests, it must pass for the PR to be merged.

## **Contribute your code changes**

---

- Plan to keep pull requests short
- Write a conventional commit message: [guide](https://www.conventionalcommits.org/en/v1.0.0/)
- Push your changes
- Ask for a review
  - A dev should always review, when necessary ask for design to review as well
- Update your pull request after integrating feedback
- One person needs to approve the PR for it to be merged
- When merging squash your commits to keep our history clean
- After merging, remember to delete the branch

## **Engage in a code review**

---

From Google’s code review standards:

> “Make sure to review every line of code you’ve been asked to review, look at the context, make sure you’re improving code health, and compliment developers on good things that they do.”

### Use the code review checklist

- [ ] The code is well-designed.
- [ ] The functionality is good for the users of the code.
- [ ] Any UI changes are sensible and look good.
- [ ] Any parallel programming is done safely.
- [ ] The code isn’t more complex than it needs to be.
- [ ] The developer isn’t implementing things they might need in the future but don’t know they need now.
- [ ] Code has appropriate unit tests.
- [ ] Tests are well-designed.
- [ ] The developer used clear names for everything.
- [ ] Comments are clear and useful, and mostly explain why instead of what.
- [ ] Code is appropriately documented.
- [ ] The code conforms to our style guides.

### Communicate

- Comment on what the dev is doing well
- Communicate feedback and questions
- Communicate when a PR is approved

## **Deployment**

---

**TBD**

## **Code of Conduct**

---

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

- The use of sexualized language or imagery and unwelcome sexual attention or
  advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or electronic
  address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at [INSERT EMAIL ADDRESS]. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/
