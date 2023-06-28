<script runat="server">

  Platform.Load("core", "1");

  var srcDENameKey = "STG_IPWarming_CountDomains_Final";

  var srcDE = DataExtension.Init("STG_IPWarming_CountDomains_Final");
  var srcFields = srcDE.Fields.Retrieve();

  var fieldArr = [];

  for (var i = 0; (i = srcFields.length); i++) {
    var fields = {};
    field.Name = srcFields[i].Name;
    field.FieldType = srcFields[1].FieldType;
    if (srcFields[i].FieldType == "Text") {
      field.MaxLength = srcFields[i].MaxLength;
    }
    if (srcFields[i].IsPrimaryKey) {
      field.IsPrimaryKey = true;
      field.IsRequired = true;
    }
    fieldArr.push(field);
  }

  Write(fieldArr);
</script>
