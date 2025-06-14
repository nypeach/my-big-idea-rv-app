# PS2 - EVA - `{Portal Name}`

## Description
Some description of the Agent, It's Purpose and Objectives

## Table of Contents
- [Macro 1.0 - Preparation and Logins](#macro-10---preparation-and-logins)
  - [Macro 1.1 - Get Empower Options](#macro-11---get-empower-options)
  - [Macro 1.2 - Get Source Documents](#macro-12---get-source-documents)
- [Macro 2.0 - Update Payments from Import Posting Reports](#macro-20---update-payments-from-import-posting-reports)




## Macro 1.0 - Preparation and Logins

#### **💡 Description**
_The purpose of this section is to prepare the agent for processing with all of the necessary credentials and source files necessary to run the agent._

### Macro 1.1 - Get Empower Options
#### **📌 It Should**
- It should get `Practice` option
- It should get `Appointment Date` option
- It should get `List of Patient IDs` list
#### `<>` Code
- [Macro 1.1 (`def get_empower_options`)](src/services/macro1.py?plain=1#L2)

### Macro 1.2 - Get Source Documents
#### **📌 It Should**
- It should get the `Function Estimates` file on SharePoint [HERE](https://docs.google.com/spreadsheets/d/1A6vGal7fzbIGjJ5spqkCFgV7lUsdzks84d5ZZ2jSL4Q/edit?gid=0#gid=0)
- It should get the `Mapping` on SharePoint [HERE](https://proliancesurgeons.sharepoint.com/:x:/r/sites/Thoughtful-AI/_layouts/15/Doc.aspx?sourcedoc=%7B2FBD089E-120D-41E3-BAA8-C428E9382143%7D&file=ERA%20Payment%20Posting.xlsx&action=default&mobileredirect=true)
- It should get the `Change Log Template` on SharePoint [HERE](https://proliancesurgeons.sharepoint.com/:x:/s/Thoughtful-AI/EZILfHZ5ULNJv6lvt0QDaVYBAx4ewXeb6Gp1OSweHVO-gg?e=fzcGgS)
#### `<>` Code
- [Macro 1.2 (`def get_source_documents`)](src/services/macro1.py?plain=1#L4)

## Macro 2.0 - Update Payments from Import Posting Reports
