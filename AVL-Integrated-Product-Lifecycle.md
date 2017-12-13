# Cognitive AVL: Lifecycle Integration and More

Status: Post-Discussion Eric/Peter/Simon on 12.12.2017

## 1. Discussion + Questions

- Current status of IODP
  - Sold as a product externally (Model.Connect, Data.Connect)
  - Internally, lots of heterogeneous data formats are used
  - Ideally, ITS and PTE would use IODP internally as well
  - **Integrate IODP horizontally along lifecycle and with internal (legacy) tools might be a valuable project for AVL**
- Concrete use case for "improved autonomy and interoperability of test and instrumentation solutions using context knowledge". I think I have an idea about this now as well and this **might be a valuable project for AVL**. Am I on the right track here?
  1. There might be an information source that holds information about products and test(s) to be performed on them (and that is integrated with IODP, i.e. has access to information from the production of the products [and via horizontal integration also from develop, in-use, previous servicing])
  2. A product might use this source to identify a test requirement and come up to a testing rig (autonomously?)
  2. The product's internal sensors might automatically connect to the rig and hand off collected data/parameters
  3. The rig might automatically configure itself to fit the product and the test at-hand
  4. The test might be performed autonomously and the results stored back to the information source
- Lot-size-one is a relevant topic for AVL
  - Model-based production planning: increased flexibility, lot-size-one
  - Proof point: UberManufacturing etc. good experience!
  - We should look deeper in this, this **might be a valuable project**.
- Customer-configured products
  - Adjust PT depending on driver parameters [age, driving style, etc.]
  - This could go hand-in-hand with the wireless instrumentation of the car that was discussed with Kay/Jasmin - in this constellation, it **might be a valuable project**
- Maintenance support based on knowledge from different lifecycle phases **might be a valuable project**
  - Automatic derivation of maintenance tasks might be interesting (AVL has already looked at this)
  - Maintenance instructions based on context parameters: product parameters; maintenance task; worker qualifications; timing; etc.
- Concrete use case about "Agile processes for increasing process discipline and compliance"
  - Is there any concrete current compliance problem that we could monitor/help/enforce technologically?
  - Is this relevant enough to warrant a project?
- Concrete use case for "interoperable tools"?
  - Is this "classic" small tools integration?
- Better cooperation between humans and products
  - Similar aspects as for classic Human-Robot Interfaces (in production)
  - Adaptation of tool parameters to context (task/worker/permissions/qualifications)

## 2. Collaboration AVL / Pro²Future

### R&D Topics

#### A. Enable Knowledge Generation and Sharing
- Development, deployment, integration of connected CPS
- Enhancement of tools and products themselves
- Knowledge sharing across lifecycle, e.g.:
  - Service -> Develop: Improved product development
  - Produce -> Service / Point-of-Sale: Bring production expert knowledge to the sales expert and field engineer
  - All -> Service / In-Use: Better servicing and smarter driver services
- Knowledge sharing across companies and across domains
  - IoT is about ecosystems, requires openness
  - Based on industry standards, if available

--> Develop **Extensible Information Model and Tools** and integrate with IODP

#### B. Make use of Shared Knowledge
- Definition and deployment of smart services
- Better integration of the human (esp. during development and production)
- Automatic adaptation of tool parameters to context (task/worker)
- Improve processes definition and compliance (automatic compliance?)

--> Develop **Smart Services and Productivity Tools** that make use of information inside the integrated knowledge model


### Concrete Collaboration Topics

- Sub-Project A - Indicative Topic **Model**: *Enabling Full Product Life Cycle Customization through Integrated Knowledge Models*
  - Target: Modeling and infrastructure
  - Focus on back-end, extensibility, tooling for realistic applications, prototypes
- Sub-Project B1 - Indicative Topic **Complexity**: *Complexity-Resilient Industrial Environments*
  - Target: manage increasing complexity of development process by feeding back data from in-use and service for hard- and software components (very valuable for AVL)!
  - LC integration, collect data in service/in-use and feed back to product development stage (HW + SW!!), realistic deployment, contribute to model
- Sub-Project B2 - Indicative Topic **Integrated Testing**: *Autonomous Tests for Autonomous Cars*
  - Target: turn testing into an autonomous process that is orchestrated by the tested products and the test rig based on the horizontally integrated IODP
  - Concrete scenarios, contribute to model
  - Synergies with B3 and B4
- Sub-Project B3 - Indicative Topic **Front Line**: *Production Knowledge to the Front Line: Downstream Benefits from Integrated Product Life Cycles*
  - Target: added value for customers based on horizontally integrated IODP and in-use configurable products
  - 2 concrete scenarios (e.g., Produce -> In-Use/Point-of-Sale; new services based on on-board diagnosis data, production, testing information + context-based adjustment of product parameters), contribute to model)
  - Synergies with B2 and B4
- Sub-Project B4 - Indicative Topic **Instrumentation**: *Power-aware Hardware/Software Architecture for Almost Autonomous Wireless Sensor Nodes*
  - Target: Wireless sensing, power management, power harvesting
  - Synergies with B2 and B3
- Sub-Project B5 - Indicative Topic **Lot-Size-One**: *Flexible Goal-Driven Production Processes for Highly Specialized Products*
    - Target: realistic deployment of goal-driven manufacturing
    - Production planning based on horizontally integrated IODP; we have prototypes for this already, target is the realistic deployment
    - Add-on topics: automated procurement, automated production facility upgrades
- Sub-Project B6 - Indicative Topic **Compliance**: *Compliance-by-Design: Model-based Definition and Compliance Checking of Industrial Processes*
  - Target: Automated compliance checking
  - Integration of in-company processes with legislative context, contribute to model)
  - Is this valuable enough to AVL?
- Project volume depends on # of selected topics, suggestion to cover 4 most interesting topics with 3 junior researchers (partially employed at AVL) + 1 senior researcher + 12 diploma theses over 4yr
  - Which topics are most interesting for AVL?
  - How can we make the topics more valuable still (proof points? evaluation metrics? concrete scenarios?)
  - For the others: how are the underlying challenges solved now? Or do these challenges not exist/are they not valuable enough?
  - What are separate projects, what should be combined?
  - How to keep (negative) competition between research teams in Pro²Future/TU Graz and at AVL at a minimum?

### Addressing Core AVL Challenges
Source: Industrie 4.0 @ AVL slides

- Increasing System Complexity
  - **Cope with increasing number, complexity, and distribution of functions** -> A1 + A2 + A3 + A6 + B1
  - **Ensure interoperability with systems that aren't known at development time** -> A1 + A4 + B2
- High Customization Capability
  - **Ensure high customization capability at Develop stage** -> A1 + A2 + B1
  - **Increase production flexibility** -> A1 + A2 + B5
  - **Enable modification of existing product** -> A1 + A2 + B3
- Non-Functional Targets
  - **Minimize sale cost** -> A1 + A2 + B1/B2/B3/B5
  - **Minimize cost of ownership** -> A1 + A2 + B3
  - **Ensure fulfillment of legislation targets** -> A1 + A2 + B6 (model-based definition and process compliance)

Industrie 4.0 Added Value:
  - Toolchains for Industrie 4.0 (!!) -> integrated tools and interfaces
  - AVL Products as CPS making use of IoT & Big Data (!!) ->  interoperability and autonomy of AVL solutions
  - Enhanced AVL Processes -> improved process agility and compliance
  - Design for Industrie 4.0 -> enable better diagnostics, predictive control, design optimization (synergies with Pro²Future Area 3!)


### Project Draft: Sub-Project A - Extensible Knowledge Model and Tools

#### Abstract

Develop information model and integrated services/tools to enable integration across lifecycle stages, with context, and with accumulated information/knowledge. Address challenges relating to model extensibility (future-proofing!), usability by domain experts (tooling!), external validity and interoperability, trust by users (and in users). Want to show real value - work on concrete scenarios that are valuable for AVL and where we can demonstrate the impact of the project on metrics that are relevant to AVL.

#### Tasks

1. Develop Knowledge Model
  - One concrete, valuable, integration scenario
  - Focus on *model extensibility* and future-proofing the model (good experience!)
  - Focus on *external interoperability* (standards, models used by other stakeholders - based on use cases!)
  - Consider *model tooling* (see A4) already during model development
  - Grow to additional scenarios
2. Integrate Model with AVL tools and products
  - Focus on loose coupling (good experience with REST + Templated SPARQL + SPIN + Agents? + Planning?; how to establish concrete connectivity (+ legislative issues)
  - Trust-preserving integration and data processing (trusted uploads from in-use/service stages; trusted computation
  - Beyond technology: social and legislative aspects (e.g., GDPR)
  - Is it realistic to target concrete integration? Or rather prototypes?
4. Tooling for Model Management
  - Enable model management by domain experts (i.e., modeling-non-experts)
  - Minimize required training of domain experts to manage model
  - Model to support training of new personnel?
6. External Interoperability
  - Interoperability with suppliers, customers, competitors
  - Create billing endpoint + open AVL model APIs to the outside
  - Charge per-use of knowledge in the model (enables smart 3rd-party services for cars, testing equipment, etc.)
7. Social Acceptance -> Pro²Future Area 1
5. Visualization "State of AVL"
  - Up-to-date overview of company state across lifecycle stages, products, and customers
  - In-situ (e.g., using AR), or in dashboard mode
  - Combine with analytics dashboard -> Pro²Future Area 3

(~ Industrie 4.0 @ AVL sub-projects 1 and 2 -- project A is an "IoT Enabler"!)


## 3. Scratchpad

- Goal: Customize full product lifecycle to customer needs and improve value chain efficiency at the same time
- Strategy: Use information (-> and derived knowledge) across lifecycle stages for increasing productivity (costs + quality) and flexibility (+ safety, durability, reliability)
- AVL LC: Conceptualize -> Develop -> Validate -> Produce -> (Test?) -> In-Use -> Service -> (Return / Dispose / Reuse?)


### Implied Core Lifecycle Integration Goals

- Enable better knowledge flow and links across lifecycle stages
  - IODP integration!
  - In-use data integration (trust both ways?)
  - Legacy software tools?
- Enable better integration of the human
  - All lifecycle stages, but specifically Develop, Produce, Service


### Other project ideas

- Production Logistics (tool management, automated purchasing, integrated ordering systems)
- Upgrades of Production Lines (Model-based determination of upgrade deltas when switching to a new product)
- AR in production / maintenance / sales (All -> Produce/In-Use/Service. good experience!)
- Industrialization of Additive Manufacturing
  - How to turn AM into a viable everyday production technology?
  - Example: gripping strategies for unique products
- Context-based testing and instrumentation (Develop/Validate/Produce)


### Sub-Projects Bx: Smart Services and Productivity Tools

1. Select several scenarios that make use of IODP-integrated Project A
2. Development based on selected scenario
  - Based on A, we have multiple options for realizing the scenarios:
    - Direct integration/knowledge sharing
    - In-model inferencing (e.g., condition checking, monitoring, "SCADA light+flexible" - good experience!)
    - Cloud-based or on-premises machine learning -> Pro²Future Area 3
    - Automated model-based planning (highly scenario-dependent! good experience!)
  - Developed tool should feed back to information model as well as use it
  - Consider users from the beginning!
