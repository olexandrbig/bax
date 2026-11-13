---
title: AnaCredit today, IReF tomorrow: Build it once
slug: anacredit-today-iref-tomorrow
description: Banks that build AnaCredit on BIRD today put their data into the shared European structure that IReF is designed around. Here is why every bank should consider it, and how we have done it.
publishedDate: 2026-11-13T09:00:00.000Z
---


European statistical reporting is moving to one integrated, granular framework, and AnaCredit is part of it. Banks that build AnaCredit on BIRD today are not only filing a report. They are putting their data into the shared European structure that the next generation of reporting is designed around.

Here is why every bank should consider it, and how we have done it.

## Where bank reporting is heading

The Eurosystem's Integrated Reporting Framework (IReF) will bring banks' statistical reporting, AnaCredit included, into one harmonised, granular framework. A consultation is planned for 2027 and a pilot from 2030, with official reporting from the second quarter of 2031, starting with a year of parallel reporting alongside today's reports. All of this is subject to the regulation being adopted. BIRD, the reporting data model developed by the ECB and the European System of Central Banks with the industry, is one of the pillars supporting that move.

BIRD is voluntary. But for a bank deciding how to build its reporting data today, it is the closest thing there is to a map of where European reporting is going.

## Why AnaCredit is the right place to start

AnaCredit is already granular: every credit instrument to a legal entity, with its counterparties, protection and accounting treatment. Those are the core building blocks any granular framework needs. A bank that models them on BIRD for AnaCredit has done much of the hard work IReF will ask for. One that builds them in a bank-specific pipeline will probably build them again.

That is the choice. AnaCredit can be one more report, or it can be the first report produced from a data layer the bank will keep using.

## Why every bank should consider it

This is not only a question for large cross-border groups. The case applies to any bank that reports AnaCredit.

- **Build once, not twice.** Data modelled on BIRD for AnaCredit is already in the structure that the European reporting direction is built around. A bank-specific mapping is likely to be rebuilt.
- **Fix data at source, not in the file.** When validation runs on the data before any file is written, errors are found where they can be corrected, before the file reaches the central bank.
- **Absorb change more cheaply.** Central banks publish new releases, and IReF will bring more change. When national rules are kept separate from the standard model, a new release is a review of differences, not a rebuild.
- **Show your working.** Supervisors expect reporting data to be consistent and traceable. Lineage from source to submission, produced by the pipeline itself, is easier to defend than documentation written after the fact.
- **Reuse the data.** A validated, instrument-level view of the loan book is valuable well beyond AnaCredit: for finance, risk, IFRS 9, collateral and portfolio analysis.

For banking groups that report in several countries, there is one more reason. The European content is built once, and each country only adds a small national adapter.

## Why this belongs on the board agenda

Regulatory reporting is usually discussed as an operational cost. With IReF ahead, it is better treated as an investment decision, with four things at stake.

**The cost of building twice.** Every euro spent on a bank-specific AnaCredit pipeline today risks being spent again when IReF arrives. Building on BIRD now means the investment carries forward. Building around it means paying for the same data model twice, on a regulatory timetable rather than the bank's own.

**The cost of the parallel run.** The IReF plan includes a first year in which banks keep sending their current statistical reports, AnaCredit among them, while also reporting under IReF. For that year, banks run the old and the new side by side, and the two must reconcile. A bank that already builds AnaCredit on BIRD produces both from the same validated data, so the parallel year is a check between two outputs rather than a reconciliation between two separate systems.

**The cost of getting it wrong.** Rejected files, resubmissions, inconsistencies between granular and aggregate reports, and supervisory questions about data quality all consume senior time and attention. Their real cost rarely shows up in the reporting budget, but it shows up in findings, remediation programmes and reputation with the supervisor.

**The value left on the table.** AnaCredit already requires the bank to build a validated, instrument-level view of its corporate lending. Used only for compliance, it is pure cost. Used across finance, risk and the business, it becomes one of the bank's most valuable data assets.

The question for leadership is not whether to report AnaCredit. That is already required. It is whether the money spent on it builds something the bank will keep using.

Three questions worth putting to the reporting, finance and risk teams:

- How much of our reporting spend goes into rebuilding the same loan data for different reports?
- If IReF arrived on schedule, how much of our current AnaCredit build could we keep?
- Can we show the supervisor, quickly and with evidence, where every reported figure comes from?

## How we have done it

We built a complete AnaCredit pipeline on BIRD for a fictitious German sample bank, using synthetic test data to simulate German AnaCredit reporting from end to end. The output follows the Deutsche Bundesbank's reporting format: AnaCredit files validated against its published schemas and file rules. They have not been submitted to the Bundesbank. The sample bank is illustrative, but the approach is not: the same pipeline can be run for any reporting agent's data, and extended to other countries through their own national adapter.

It runs in BAX, our operator console for regulatory reporting on BIRD: BIRD is implemented as a dbt project on Snowflake, with each BIRD layer in its own schema, and a renderer turns the validated datasets into XML files in the Bundesbank's SDMX-based AnaCredit-BBk and RIAD-BBk reporting schemas. Five design choices shaped it.

### 1. The model is BIRD, not ours

The data flows through BIRD's own layers:

- The **Input Layer** holds the bank's data in BIRD structure.
- The **Enriched Input Layer** applies BIRD's published derivations.
- The **Reference Output Layer** produces report-ready AnaCredit datasets.

The bank fills the Input Layer once. AnaCredit is produced from it, and other reports can be produced from the same validated layer. Where we add rules of our own, such as plausibility checks, they are labelled as ours.

Getting data into the Input Layer is the hardest part of any implementation, and we treat it that way. Extracts from core banking, collateral and accounting systems land in a staging layer, where they are cleaned and mapped to BIRD's structure and codes. Only then do they enter the Input Layer, and every mapping stays traceable to its source field. The effort depends on the bank's systems and data quality, but it is spent once: the same mapped layer serves every report built on BIRD, AnaCredit today and IReF tomorrow.

### 2. Validate before any file is written

No file is rendered until the data has passed four gates. A fifth gate then checks the files themselves.

| Gate | What it checks | Source of the rules |
| --- | --- | --- |
| 1 Structure | Every dataset present, required attributes populated, keys unique | AnaCredit data model |
| 2 Domain | Every coded value belongs to its codelist | Central bank codelists |
| 3 Referential | The datasets tie together, under the ECB's own check IDs | ECB validation checks |
| 4 Business | Plausibility and accounting consistency | Our own rules, labelled as such |
| 5 Schema and transmission | The files against the central bank's schemas and file rules | Central bank specification |

Because the first four gates do the work on the data, the last one rarely finds anything.

### 3. National rules are data, not code

The gap between BIRD's datasets and the Bundesbank's file is closed by a German country adapter. Its attribute lists and codelists are generated from the Bundesbank's published schema package, not retyped. The rest is a short list of rules: renames, identifier types, where a not-applicable value is allowed, and how file headers and names are built. No country-specific logic lives in the transformation code, and a test checks that it stays that way.

Every mapping carries a status: **Confirmed** when it is written in a named central bank source, **Derived** when it follows a documented pattern, and **Requires confirmation** when it is an open question for the central bank. The open ones are listed in one place, so a live filing never rests quietly on a guess. A second country is a second adapter on the same engine.

### 4. Evidence is a by-product of the run

We did not build lineage as a separate feature. The pipeline has to know every dependency in order to run, so the path from source data to central bank file comes from the run itself. Every gate result is kept with the records that triggered it, and every decision the adapter takes between the data and the file is logged: each rename, each not-applicable value, each optional attribute left out.

### 5. The same data serves other reports

The validated AnaCredit datasets are also the right foundation for portfolio, credit risk, IFRS 9, collateral and counterparty views. In BAX they are exposed through a read-only layer to business intelligence tools, so the numbers in management reporting come from the same data that produced the submission.

## What comes next: the feedback loop

Reporting does not end when a file is sent. The Bundesbank returns validation results for each file, reminders for missing templates and data-quality indicators. Reporting agents confirm flagged anomalies, resubmit periods and send changes. Handling that loop, with revisions of past periods traced back to the source data rather than patched in the file, is the next step for the pipeline.

## Talk to the author

If you are deciding how to build or rebuild AnaCredit, preparing for IReF, or exploring BIRD, we would be glad to compare notes. [Get in touch through our contact form](/#contact).
