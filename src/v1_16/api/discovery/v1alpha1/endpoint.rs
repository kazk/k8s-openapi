// Generated from definition io.k8s.api.discovery.v1alpha1.Endpoint

/// Endpoint represents a single logical "backend" implementing a service.
#[derive(Clone, Debug, Default, PartialEq)]
pub struct Endpoint {
    /// addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. This allows for cases like dual-stack (IPv4 and IPv6) networking. Consumers (e.g. kube-proxy) must handle different types of addresses in the context of their own capabilities. This must contain at least one address but no more than 100.
    pub addresses: Vec<String>,

    /// conditions contains information about the current status of the endpoint.
    pub conditions: Option<crate::api::discovery::v1alpha1::EndpointConditions>,

    /// hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other (e.g. in DNS names). Multiple endpoints which use the same hostname should be considered fungible (e.g. multiple A values in DNS). Must pass DNS Label (RFC 1123) validation.
    pub hostname: Option<String>,

    /// targetRef is a reference to a Kubernetes object that represents this endpoint.
    pub target_ref: Option<crate::api::core::v1::ObjectReference>,

    /// topology contains arbitrary topology information associated with the endpoint. These key/value pairs must conform with the label format. https://kubernetes.io/docs/concepts/overview/working-with-objects/labels Topology may include a maximum of 16 key/value pairs. This includes, but is not limited to the following well known keys: * kubernetes.io/hostname: the value indicates the hostname of the node
    ///   where the endpoint is located. This should match the corresponding
    ///   node label.
    /// * topology.kubernetes.io/zone: the value indicates the zone where the
    ///   endpoint is located. This should match the corresponding node label.
    /// * topology.kubernetes.io/region: the value indicates the region where the
    ///   endpoint is located. This should match the corresponding node label.
    pub topology: std::collections::BTreeMap<String, String>,
}

impl<'de> crate::serde::Deserialize<'de> for Endpoint {
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error> where D: crate::serde::Deserializer<'de> {
        #[allow(non_camel_case_types)]
        enum Field {
            Key_addresses,
            Key_conditions,
            Key_hostname,
            Key_target_ref,
            Key_topology,
            Other,
        }

        impl<'de> crate::serde::Deserialize<'de> for Field {
            fn deserialize<D>(deserializer: D) -> Result<Self, D::Error> where D: crate::serde::Deserializer<'de> {
                struct Visitor;

                impl<'de> crate::serde::de::Visitor<'de> for Visitor {
                    type Value = Field;

                    fn expecting(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
                        f.write_str("field identifier")
                    }

                    fn visit_str<E>(self, v: &str) -> Result<Self::Value, E> where E: crate::serde::de::Error {
                        Ok(match v {
                            "addresses" => Field::Key_addresses,
                            "conditions" => Field::Key_conditions,
                            "hostname" => Field::Key_hostname,
                            "targetRef" => Field::Key_target_ref,
                            "topology" => Field::Key_topology,
                            _ => Field::Other,
                        })
                    }
                }

                deserializer.deserialize_identifier(Visitor)
            }
        }

        struct Visitor;

        impl<'de> crate::serde::de::Visitor<'de> for Visitor {
            type Value = Endpoint;

            fn expecting(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
                f.write_str("Endpoint")
            }

            fn visit_map<A>(self, mut map: A) -> Result<Self::Value, A::Error> where A: crate::serde::de::MapAccess<'de> {
                let mut value_addresses: Option<Vec<String>> = None;
                let mut value_conditions: Option<crate::api::discovery::v1alpha1::EndpointConditions> = None;
                let mut value_hostname: Option<String> = None;
                let mut value_target_ref: Option<crate::api::core::v1::ObjectReference> = None;
                let mut value_topology: Option<std::collections::BTreeMap<String, String>> = None;

                while let Some(key) = crate::serde::de::MapAccess::next_key::<Field>(&mut map)? {
                    match key {
                        Field::Key_addresses => value_addresses = Some(crate::serde::de::MapAccess::next_value(&mut map)?),
                        Field::Key_conditions => value_conditions = crate::serde::de::MapAccess::next_value(&mut map)?,
                        Field::Key_hostname => value_hostname = crate::serde::de::MapAccess::next_value(&mut map)?,
                        Field::Key_target_ref => value_target_ref = crate::serde::de::MapAccess::next_value(&mut map)?,
                        Field::Key_topology => value_topology = crate::serde::de::MapAccess::next_value(&mut map)?,
                        Field::Other => { let _: crate::serde::de::IgnoredAny = crate::serde::de::MapAccess::next_value(&mut map)?; },
                    }
                }

                Ok(Endpoint {
                    addresses: value_addresses.ok_or_else(|| crate::serde::de::Error::missing_field("addresses"))?,
                    conditions: value_conditions,
                    hostname: value_hostname,
                    target_ref: value_target_ref,
                    topology: value_topology.unwrap_or_default(),
                })
            }
        }

        deserializer.deserialize_struct(
            "Endpoint",
            &[
                "addresses",
                "conditions",
                "hostname",
                "targetRef",
                "topology",
            ],
            Visitor,
        )
    }
}

impl crate::serde::Serialize for Endpoint {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error> where S: crate::serde::Serializer {
        let mut state = serializer.serialize_struct(
            "Endpoint",
            1 +
            self.conditions.as_ref().map_or(0, |_| 1) +
            self.hostname.as_ref().map_or(0, |_| 1) +
            self.target_ref.as_ref().map_or(0, |_| 1) +
            usize::from(!self.topology.is_empty()),
        )?;
        crate::serde::ser::SerializeStruct::serialize_field(&mut state, "addresses", &self.addresses)?;
        if let Some(value) = &self.conditions {
            crate::serde::ser::SerializeStruct::serialize_field(&mut state, "conditions", value)?;
        }
        if let Some(value) = &self.hostname {
            crate::serde::ser::SerializeStruct::serialize_field(&mut state, "hostname", value)?;
        }
        if let Some(value) = &self.target_ref {
            crate::serde::ser::SerializeStruct::serialize_field(&mut state, "targetRef", value)?;
        }
        if !self.topology.is_empty() {
            crate::serde::ser::SerializeStruct::serialize_field(&mut state, "topology", &self.topology)?;
        }
        crate::serde::ser::SerializeStruct::end(state)
    }
}
