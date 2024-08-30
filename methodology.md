---
title: Methodology
layout: methodology
excerpt: "Methodology"
aside: true
---


In the following, the process of sourcing, processing, and categorizing documents for the Gender Data Library is outlined in detail to ensure the creation of a comprehensive and reliable repository.

1. **Document Sourcing**<br>
The initial step focused on sourcing relevant documents based on a carefully selected list of keywords (see Fig. 1 below) associated with gender data across various sectors. For the academic sector, Google Scholar was used to collect documents, retrieving the first 20 articles for each keyword search. This approach provided a broad spectrum of scholarly research related to gender issues in Burkina Faso. For international organizations, documents were sourced from key bodies such as the UN, WFP, WHO, World Bank, FAO, ILO, IOM, and UN Women. These organizations were selected due to their significant contributions to gender-related research and policy documents. Some additional sources from international organizations will be incorporated into the repository at a later stage. For political institutions, the FAO’s FAOLEX database was utilized to gather all available documents from various ministries that were accessible online. This comprehensive sourcing strategy ensured the inclusion of a wide range of documents from multiple authoritative sources, covering key perspectives on gender data from global, regional, and local levels. <br>

2. **Document Processing**<br>
Once the documents were collected, a systematic processing phase was initiated to prepare the data for analysis and classification. First, the text from each document was extracted. If the document was in a scanned format, Optical Character Recognition (OCR) technology was applied to convert it into machine-readable text. After text extraction, the language of each document was detected to facilitate proper classification and subsequent analysis. To ensure consistent tracking and management, unique identifiers (IDs) were generated for each document, which were then used throughout the subsequent stages to maintain consistency and prevent duplication.<br>

3. **Duplicates Removal**<br>
To avoid redundancy and maintain the quality of the library, duplicate documents were systematically removed. Each document’s content was processed through a hashing algorithm to generate unique IDs based on the text. These IDs were then compared to identify identical documents across the dataset. When duplicates were found, only one instance of each document was retained. This step was essential to ensure that users would have access to a streamlined and unique set of documents, avoiding confusion and improving search efficiency within the library.<br>

4. **Description Recovery**<br>
During the document collection process, it was observed that only for about 30% of the documents a description or abstract was collected as metadata in the document sourcing stage. To address this gap, Meta AI's newest Llama 3.1 8B model was employed to automatically generate missing descriptions, as well as to extract relevant metadata such as dates and titles. The model was applied to the first 2,000 characters of each document (approximately the first 2-3 pages of text) to generate concise and contextually accurate summaries. This step enhanced the metadata associated with each document, making it easier for users to understand the content and relevance of each document without needing to read through the entire text.<br>

5. **Document Scoring**<br>
To categorize and prioritize documents effectively, each document description was evaluated and scored on a scale from 0 to 1 using Meta AI's zero-shot classifier, BART-Large-MNLI. This model was used to classify the documents into 13 predefined gender categories, such as education, health, economic empowerment, and social inclusion. Additionally, two extra categories — "Gender" and "Statistics and Data" — were included to reduce the library only to the documents focused on gender data. The scores indicated the relevance of each document to these categories, allowing users to filter and prioritize documents based on their specific interests and needs.<br>

6. **Cutoff Definitions**<br>
To maintain a focused and relevant library, cutoff thresholds were established for inclusion. For the categories "Gender" and "Statistics and data" a cutoff score of 0.1 was defined (see Fig. 2 below). Documents scoring below this threshold were filtered out to exclude those not sufficiently related to gender data topics. This step ensured that the library remained targeted and relevant, providing users with high-quality documents that align with their search criteria and the library’s objectives.<br>
<br>
<br>
{% include figure.html image="/assets/keywords_en.png" caption="Fig. 1: Gender data keywords covering various dimensions of gender data in Burkin Faso." width="800" height="1400" %}

<br>
<br>
{% include figure.html image="/assets/scores_analysis.png" caption="Fig. 2: Analysis of the distribution of scores for every category. Cutoff scores for Gender and Statistics and Data were determined after manual inspection of descriptions around the cutoff scores." width="1100" height="4000" %}

