/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ChaosManagementClient } = require("@azure/arm-chaos");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a list of Capability resources that extend a Target resource..
 *
 * @summary Get a list of Capability resources that extend a Target resource..
 * x-ms-original-file: specification/chaos/resource-manager/Microsoft.Chaos/preview/2022-07-01-preview/examples/ListCapabilities.json
 */
async function listAllCapabilitiesThatExtendAVirtualMachineTargetResource() {
  const subscriptionId = "6b052e15-03d3-4f17-b2e1-be7f07588291";
  const resourceGroupName = "exampleRG";
  const parentProviderNamespace = "Microsoft.Compute";
  const parentResourceType = "virtualMachines";
  const parentResourceName = "exampleVM";
  const targetName = "Microsoft-VirtualMachine";
  const credential = new DefaultAzureCredential();
  const client = new ChaosManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.capabilities.list(
    resourceGroupName,
    parentProviderNamespace,
    parentResourceType,
    parentResourceName,
    targetName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllCapabilitiesThatExtendAVirtualMachineTargetResource().catch(console.error);
