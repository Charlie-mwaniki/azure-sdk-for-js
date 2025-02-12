/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityCenter } = require("@azure/arm-security");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes the ingestion settings for this subscription.
 *
 * @summary Deletes the ingestion settings for this subscription.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2021-01-15-preview/examples/IngestionSettings/DeleteIngestionSetting_example.json
 */
async function deleteAnIngestionSettingForTheSubscription() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const ingestionSettingName = "default";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.ingestionSettings.delete(ingestionSettingName);
  console.log(result);
}

deleteAnIngestionSettingForTheSubscription().catch(console.error);
