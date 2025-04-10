# **Sorsogon Community Innovation Labs Portal**

Hello, Portal!

## **How to Contribute?**

### **Table of Contents**

1. [Set up your local development environment](#step-1-set-up-your-local-development-environment)

2. [Clone the repository](#step-2-clone-the-repo)

3. [Create and select a branch](#step-3-create-and-select-a-branch)

4. [Make changes](#step-4-make-changes)

5. [Submit for code review](#step-5-submit-for-code-review)

6. [Cleanup](#step-6-cleanup)

---

### Step 1: Set up your local development environment

Before you start, install the necessary tools to start working on the project.
#### Example:
- [Nodejs](https://nodejs.org/dist/v22.14.0/node-v22.14.0-x64.msi)
- [Visual Studio Code](https://code.visualstudio.com/Download)
- Others...

---

### Step 2: Clone the repo

Cloning means downloading the project to your computer.

#### Using VScode:

1. Open `vscode` and press `ctrl + \`  to open the terminal

2. Create a git directory to store all of your repository if you don't have one yet and navigate towards it:
```bash
mkdir ~\git
cd ~\git
```

3. Copy the repository URL from GitHub:

4. Clone the repository: 
```bash
git clone https://github.com/InnovationLabsPH/Portal.git
```

5. Open the newly cloned repo inside `vscode`:
```bash
code ~\git\Portal
```

---

### Step 3: Create and select a branch

A branch lets you work on new features or fixes without affecting the main project. When creating a branch, use a descriptive name that clearly indicates what you are working on.

#### Using Terminal:
1. [Create a branch (Terminal)](#How-to-create-a-branch-using-the-terminal)
2. [Switch Branches (Terminal)](#How-to-select-a-branch-using-the-terminal)

#### Using vscode:
1. [Create a branch (vscode)](#how-to-create-a-branch-inside-vscode)
2. [Select a branch (vscode)](#how-to-select-a-branch-inside-vscode)

#### How to create a branch using the terminal:

1. Make sure you are inside your projects directory.

2. Create a branch using `git branch <branch-name>` command. Make sure that the branch name describes the purpose of the branch and replaces spaces with `-`:
```bash
git branch <replace-this-with-your-branch-named>
```

3. You can check if the branch was created successfully using `git branch`. A list of branches should now appear:
```bash
git branch
```

4. We then switch into our newly created branch **(This is important)**:
```bash
git checkout <branch-name>
```

5. Now we need to upload the branch we created into the remote repository so other people are aware of it:
```bash
git push --set-upstream origin <branch-name>
```

6. We are done, you successfully created a new branch and ready to start coding!

---

#### How to select a branch using the terminal:

1. First we need to list all available branches:
```bash
git branch -a
```

2. After choosing the branch you want to work with we use the `git checkout <branch-name>` command. We will ignore the `/remotes/origin/` part and simply use the branch name:
```bash
git checkout <branch-name>
```

3.  If this is the first time you used this branch then you probably need to set the upstream (this tells git where to push/upload your code):
```bash
git push --set-upstream origin <branch-name>
```

---

#### How to create a branch inside vscode:

1. From the upper-left corner of GitHub, click **main** just beside **Branch**.

<img src="https://github.com/user-attachments/assets/095d812d-b356-49f3-81a5-58ed74357e8a" />

2. In the search bar, type the name of your new branch. A "**Create branch ...**" option should appear below.

<img src="https://github.com/user-attachments/assets/f6fa1368-21df-411a-b39b-e0eb229cc4b8" />

3. Click "**Create branch**" and it should automatically create and switch to the new branch.

<img src="https://github.com/user-attachments/assets/f949c358-9e3c-40b9-ba50-4b180062dd3b" />

You successfully created a new branch!!!

#### How to select a branch inside vscode:

1. Inside `vscode`, navigate to the `Source Control` tab. Make sure that the project repository you will be working on is open/active inside the editor.

![image](https://github.com/user-attachments/assets/955de702-c626-4b16-90eb-56522f668436)

2. Press the `pull` command to fetch updates from the remote repository, including newly created **branches**.
![image](https://github.com/user-attachments/assets/f2152c7e-a3da-493e-8f6c-eefabcbe98ed)

3. Click the `Auto` button to select which branch you would like to work on:
![image](https://github.com/user-attachments/assets/ea9f9775-9afc-4ea7-9042-031e2917abea)

4. It should now list all the available branches. Feel free to select the branch you would be working with and press **OK**.

![image](https://github.com/user-attachments/assets/2674abbb-b865-422f-9182-bf186c90531b)

5. The currently selected branch name will now be displayed.
![image](https://github.com/user-attachments/assets/32dae766-9142-4ec3-be21-deb34fc4716d)

You successfully switched to your selected branch!!!

---

### Step 4: Make changes
- Commit and push your code changes to the branch you cloned.
- Ideally, do it periodically to have savepoints and to back up your progress.
- TODO

---

### Step 5: Submit for code review

When you're satisfied with your work, create a **pull request (PR)** to request a code review for all of your commits.

- TODO

---

### Step 6: Cleanup

 When the task is done and passed for the code review and the changes are merged into the main branch, delete the branch that you created to fully clean things up.

Navigate towards the projects directory and delete the branch that was already merged:

```bash
git branch -d <branch-name>
git branch origin --delete <branch-name>
```

That's it! You successfully contributed to the project!