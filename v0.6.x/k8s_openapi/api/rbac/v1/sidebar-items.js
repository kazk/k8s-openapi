initSidebarItems({"enum":[["CreateClusterRoleBindingResponse","Use `<CreateClusterRoleBindingResponse as Response>::try_from_parts` to parse the HTTP response body of [`ClusterRoleBinding::create_cluster_role_binding`]"],["CreateClusterRoleResponse","Use `<CreateClusterRoleResponse as Response>::try_from_parts` to parse the HTTP response body of [`ClusterRole::create_cluster_role`]"],["CreateNamespacedRoleBindingResponse","Use `<CreateNamespacedRoleBindingResponse as Response>::try_from_parts` to parse the HTTP response body of [`RoleBinding::create_namespaced_role_binding`]"],["CreateNamespacedRoleResponse","Use `<CreateNamespacedRoleResponse as Response>::try_from_parts` to parse the HTTP response body of [`Role::create_namespaced_role`]"],["DeleteClusterRoleBindingResponse","Use `<DeleteClusterRoleBindingResponse as Response>::try_from_parts` to parse the HTTP response body of [`ClusterRoleBinding::delete_cluster_role_binding`]"],["DeleteClusterRoleResponse","Use `<DeleteClusterRoleResponse as Response>::try_from_parts` to parse the HTTP response body of [`ClusterRole::delete_cluster_role`]"],["DeleteCollectionClusterRoleBindingResponse","Use `<DeleteCollectionClusterRoleBindingResponse as Response>::try_from_parts` to parse the HTTP response body of [`ClusterRoleBinding::delete_collection_cluster_role_binding`]"],["DeleteCollectionClusterRoleResponse","Use `<DeleteCollectionClusterRoleResponse as Response>::try_from_parts` to parse the HTTP response body of [`ClusterRole::delete_collection_cluster_role`]"],["DeleteCollectionNamespacedRoleBindingResponse","Use `<DeleteCollectionNamespacedRoleBindingResponse as Response>::try_from_parts` to parse the HTTP response body of [`RoleBinding::delete_collection_namespaced_role_binding`]"],["DeleteCollectionNamespacedRoleResponse","Use `<DeleteCollectionNamespacedRoleResponse as Response>::try_from_parts` to parse the HTTP response body of [`Role::delete_collection_namespaced_role`]"],["DeleteNamespacedRoleBindingResponse","Use `<DeleteNamespacedRoleBindingResponse as Response>::try_from_parts` to parse the HTTP response body of [`RoleBinding::delete_namespaced_role_binding`]"],["DeleteNamespacedRoleResponse","Use `<DeleteNamespacedRoleResponse as Response>::try_from_parts` to parse the HTTP response body of [`Role::delete_namespaced_role`]"],["ListClusterRoleBindingResponse","Use `<ListClusterRoleBindingResponse as Response>::try_from_parts` to parse the HTTP response body of [`ClusterRoleBinding::list_cluster_role_binding`]"],["ListClusterRoleResponse","Use `<ListClusterRoleResponse as Response>::try_from_parts` to parse the HTTP response body of [`ClusterRole::list_cluster_role`]"],["ListNamespacedRoleBindingResponse","Use `<ListNamespacedRoleBindingResponse as Response>::try_from_parts` to parse the HTTP response body of [`RoleBinding::list_namespaced_role_binding`]"],["ListNamespacedRoleResponse","Use `<ListNamespacedRoleResponse as Response>::try_from_parts` to parse the HTTP response body of [`Role::list_namespaced_role`]"],["ListRoleBindingForAllNamespacesResponse","Use `<ListRoleBindingForAllNamespacesResponse as Response>::try_from_parts` to parse the HTTP response body of [`RoleBinding::list_role_binding_for_all_namespaces`]"],["ListRoleForAllNamespacesResponse","Use `<ListRoleForAllNamespacesResponse as Response>::try_from_parts` to parse the HTTP response body of [`Role::list_role_for_all_namespaces`]"],["PatchClusterRoleBindingResponse","Use `<PatchClusterRoleBindingResponse as Response>::try_from_parts` to parse the HTTP response body of [`ClusterRoleBinding::patch_cluster_role_binding`]"],["PatchClusterRoleResponse","Use `<PatchClusterRoleResponse as Response>::try_from_parts` to parse the HTTP response body of [`ClusterRole::patch_cluster_role`]"],["PatchNamespacedRoleBindingResponse","Use `<PatchNamespacedRoleBindingResponse as Response>::try_from_parts` to parse the HTTP response body of [`RoleBinding::patch_namespaced_role_binding`]"],["PatchNamespacedRoleResponse","Use `<PatchNamespacedRoleResponse as Response>::try_from_parts` to parse the HTTP response body of [`Role::patch_namespaced_role`]"],["ReadClusterRoleBindingResponse","Use `<ReadClusterRoleBindingResponse as Response>::try_from_parts` to parse the HTTP response body of [`ClusterRoleBinding::read_cluster_role_binding`]"],["ReadClusterRoleResponse","Use `<ReadClusterRoleResponse as Response>::try_from_parts` to parse the HTTP response body of [`ClusterRole::read_cluster_role`]"],["ReadNamespacedRoleBindingResponse","Use `<ReadNamespacedRoleBindingResponse as Response>::try_from_parts` to parse the HTTP response body of [`RoleBinding::read_namespaced_role_binding`]"],["ReadNamespacedRoleResponse","Use `<ReadNamespacedRoleResponse as Response>::try_from_parts` to parse the HTTP response body of [`Role::read_namespaced_role`]"],["ReplaceClusterRoleBindingResponse","Use `<ReplaceClusterRoleBindingResponse as Response>::try_from_parts` to parse the HTTP response body of [`ClusterRoleBinding::replace_cluster_role_binding`]"],["ReplaceClusterRoleResponse","Use `<ReplaceClusterRoleResponse as Response>::try_from_parts` to parse the HTTP response body of [`ClusterRole::replace_cluster_role`]"],["ReplaceNamespacedRoleBindingResponse","Use `<ReplaceNamespacedRoleBindingResponse as Response>::try_from_parts` to parse the HTTP response body of [`RoleBinding::replace_namespaced_role_binding`]"],["ReplaceNamespacedRoleResponse","Use `<ReplaceNamespacedRoleResponse as Response>::try_from_parts` to parse the HTTP response body of [`Role::replace_namespaced_role`]"],["WatchClusterRoleBindingResponse","Use `<WatchClusterRoleBindingResponse as Response>::try_from_parts` to parse the HTTP response body of [`ClusterRoleBinding::watch_cluster_role_binding`]"],["WatchClusterRoleResponse","Use `<WatchClusterRoleResponse as Response>::try_from_parts` to parse the HTTP response body of [`ClusterRole::watch_cluster_role`]"],["WatchNamespacedRoleBindingResponse","Use `<WatchNamespacedRoleBindingResponse as Response>::try_from_parts` to parse the HTTP response body of [`RoleBinding::watch_namespaced_role_binding`]"],["WatchNamespacedRoleResponse","Use `<WatchNamespacedRoleResponse as Response>::try_from_parts` to parse the HTTP response body of [`Role::watch_namespaced_role`]"],["WatchRoleBindingForAllNamespacesResponse","Use `<WatchRoleBindingForAllNamespacesResponse as Response>::try_from_parts` to parse the HTTP response body of [`RoleBinding::watch_role_binding_for_all_namespaces`]"],["WatchRoleForAllNamespacesResponse","Use `<WatchRoleForAllNamespacesResponse as Response>::try_from_parts` to parse the HTTP response body of [`Role::watch_role_for_all_namespaces`]"]],"struct":[["AggregationRule","AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole"],["ClusterRole","ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding."],["ClusterRoleBinding","ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject."],["ClusterRoleBindingList","ClusterRoleBindingList is a collection of ClusterRoleBindings"],["ClusterRoleList","ClusterRoleList is a collection of ClusterRoles"],["CreateClusterRoleBindingOptional","Optional parameters of [`ClusterRoleBinding::create_cluster_role_binding`]"],["CreateClusterRoleOptional","Optional parameters of [`ClusterRole::create_cluster_role`]"],["CreateNamespacedRoleBindingOptional","Optional parameters of [`RoleBinding::create_namespaced_role_binding`]"],["CreateNamespacedRoleOptional","Optional parameters of [`Role::create_namespaced_role`]"],["PolicyRule","PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to."],["ReadClusterRoleBindingOptional","Optional parameters of [`ClusterRoleBinding::read_cluster_role_binding`]"],["ReadClusterRoleOptional","Optional parameters of [`ClusterRole::read_cluster_role`]"],["ReadNamespacedRoleBindingOptional","Optional parameters of [`RoleBinding::read_namespaced_role_binding`]"],["ReadNamespacedRoleOptional","Optional parameters of [`Role::read_namespaced_role`]"],["ReplaceClusterRoleBindingOptional","Optional parameters of [`ClusterRoleBinding::replace_cluster_role_binding`]"],["ReplaceClusterRoleOptional","Optional parameters of [`ClusterRole::replace_cluster_role`]"],["ReplaceNamespacedRoleBindingOptional","Optional parameters of [`RoleBinding::replace_namespaced_role_binding`]"],["ReplaceNamespacedRoleOptional","Optional parameters of [`Role::replace_namespaced_role`]"],["Role","Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding."],["RoleBinding","RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace."],["RoleBindingList","RoleBindingList is a collection of RoleBindings"],["RoleList","RoleList is a collection of Roles"],["RoleRef","RoleRef contains information that points to the role being used"],["Subject","Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names."]]});