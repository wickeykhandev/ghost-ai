# [Project Name]

## Overview

Ghost AI is a real-time collabrative system design workspace. Users describe a system in plain English, an AI agent maps that system onto a shared canvas, collaborators refine the architecture, and the app genrates a technical specification from the resulting graph.

## Goals

1. Let authenticated user create and manage architecture projects.
2. Provide a collaborative real-time canvas for system design.
3. Let users import prebuilt starter system design into the canvas.
4. Let AI generate an initial architecture from a natural language promt.
5. Let collaborators refine the genrated architecture.
6. convert the final graph into a presistent markdown technical spec.

## Core User Flow

1. user sign in.
2. user creates or selects a project.
3. user enters the project workspace.
4. user optionally imports a starter system design template into the canvas.
5. user prompts the AI to genrate or extend the system design.
6. AI genrates nodes and edges in the shared canvas.
7. collaborators edit and refine the design.
8. user triggers spec genration.
9. app persists the generated markdown spec.
10. user reviews or downloads the spec.

## Features

### authentication and project

- user sign-in and route protection
- project creation,ownership,and collaborator access.
- project list and workspace navigation

### collaborative canvas

- shared real-time canvas using Liveblocks and React Flow.
- Live cursors,presence indicators,and node/edge editing.
- Canvas snapshots persisted to the filesystem.

### Starter System Design 
- a curated library of prebuilt system design templates
- users can import a starter template into the canvas at any point during editing.
- templates are static canvas snapshots loaded directly into the active room.
- covers common patterns: monolith, microservices,event-driven,serverless,and more


### AI Architecture genration 
- AI generates a system design from a user-supplied promt.
- output is structured as canvas nodes and edges written into the shared room.
- Generation runs as a durable background task.

### Spec Generation 
- the current canvas graph is converted into a markdown technical specification
- specs are persisted as files and linked to the project in the database 
- users can view and download generated specs
## Scope
 

### In Scope

- authentication and route protection 
- project creation and ownership 
- collaborator access by project 
- starter system design template library and import
- real-time shared canvas with nodes, edges, and presence
- AI-powered architecture generation from prompts
- AI-powered markdown spec generation from the canvas graph
- persistent storage for project metadata and generated artifacts
- spec download

### Out of Scope

- billing and subscription systems
- enterprise permission tiers beyond owner and collaborator
- versioned spec history and review workflows
- production object storage migration
- mobile-native applications

## Success Criteria

1. A signed-in user can create and open a project
   
2. multiple users can collaborate in the same canvas simultaneously 

3. a user can import a prebuilt starter design into the canvas
4. AI can generate an architecture into the shared room from a promt
5. the graph can be converted into a persisted markdown spec
6. project metadata and generated artifacts are stored in the correct layers
