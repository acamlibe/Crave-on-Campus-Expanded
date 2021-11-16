# Crave on Campus (Expanded)
This is a repository of all the work that goes into the Crave on Campus project we have for DSBA-6160.

## Team Members
  * Saurabh Vijay
  * Shina Dhingra
  * Sammie Srabani
  * Ali Camlibel
  * Lakshmi Medineni
## Project Background and Description
The project background should go here. This will describe what the previous year’s students have already done, and some general background information on the Crave on Campus project.
## Project Scope
The scope of our project should go here.
## Business Rules
The new system must include the following:
* Ability to easily retrieve ratings on both drivers and restaurants that are a part of the system.  
* Ability to see information about the individual drivers and restaurants in our system.
* Ability to see statistical analysis on ratings, such as average, min, and max.
* Ability to query all related data within a reasonable time. Query times should not exceed 5 seconds.
## Deliverables
* Use Case, Business Rules, Enhanced ERD, Schema (Due 11/18/2021)
* New Rating Table, Test Data (Due 11/25/2021)
* Queries (Due 12/2/2021)
* Final Project (Due 12/8/2021)
## Implementation Plan
Implementing this plan will require the following:
1. Import the current design and data of the existing database schema.
2. Normalize any tables, if necessary. All tables should be in 3rd normal form.
3. Break apart any many-to-many relationships that may exist.
4. Generate an ERD diagram of the current, or normalized, implementation.
5. Add in rating tables for both drivers and restaurants.
    *	Should be in 3rd normal form with the proper foreign key constraints.
    *	Should not have any many-to-many relationships.
    *	Should contain auto-incrementing surrogate keys for the tables’ primary keys. No composite keys should be used.
    *	Make sure common metadata within the design is refactored out and joined together.
6. Generate an ERD diagram of the expanded design.
7. Insert in fake, but reasonable, data into the new rating tables.
    *	Can be done manually by generating and importing data from generatedata.com
    *	Can be done in Python to automatically generate and run the proper INSERT statements.
8. Create functions to the schema to allow quick access to the data.
9. Create stored procedures to the schema to allow quick access to the retrieval and insertion of data.
10. Create views that will be used for reporting.
11. Index the views.
12. Record a video demo of the system and the data associated with it.
